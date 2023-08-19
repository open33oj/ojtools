const { Route, Handler } = global.Hydro.service.server; // 注册路由所用工具
const { PRIV } = global.Hydro.model.builtin; // 内置 Privilege 权限节点
const { NotFoundError } = global.Hydro.error;
const user = global.Hydro.model.user;

//展示所有 
class BadgeShowHandler extends Handler {
    async get() {
        // this.checkPriv(PRIV.PRIV_USER_PROFILE);
        let udocs = await user.getMulti({badge:{$exists : true, $ne : ""}}).toArray();
        this.response.template = 'badge_show.html'; // 返回此页面
        this.response.body = { udocs };
    }
}

//创建
class BadgeCreateHandler extends Handler {
    async get() {
        // this.checkPriv(PRIV.PRIV_USER_PROFILE);
        this.response.template = 'badge_create.html'; // 返回此页面
    }

    async post({ uid, text, color, textColor }) {
        // 检查输入
        uid = parseInt(uid);
        if (uid <= 1)
            throw new NotFoundError(uid);
        text = text.replace('\'', '').replace('\"', '');
        if (!text)
            throw new NotFoundError('text');
        if (!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color) ||
            !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(textColor))
            throw new NotFoundError('color');
        // 构建徽章代码并更新
        await user.setById(uid, { badge : text+color+textColor});
        // 将用户重定向到创建完成的url
        this.response.redirect = "/badge";
    }
}

//管理
class BadgeManageHandler extends Handler {
    async get() {
        // this.checkPriv(PRIV.PRIV_USER_PROFILE);
        const udocs = await user.getMulti({badge:{$exists : true, $ne : ""}}).toArray();
	this.response.template = 'badge_manage.html'; // 返回此页面
	this.response.body = { udocs };
    }
}

//删除 
class BadgeDelHandler extends Handler {
    async get({ id }) {
        id = parseInt(id);
	await user.setById(id, {badge : ""});
	this.response.redirect = "/badge/manage";
    }
    
}


// Hydro会在服务初始化完成后调用该函数。
async function apply() {
    //展示所有有徽章的用户
    Route('badge_show', '/badge', BadgeShowHandler, PRIV.PRIV_USER_PROFILE);
    //新建/修改、管理/删除徽章
    Route('badge_create', '/badge/create', BadgeCreateHandler, PRIV.PRIV_CREATE_DOMAIN);
    Route('badge_manage', '/badge/manage', BadgeManageHandler, PRIV.PRIV_CREATE_DOMAIN);
    Route('badge_del', '/badge/manage/:id/del', BadgeDelHandler, PRIV.PRIV_CREATE_DOMAIN);
}

global.Hydro.handler.badge = apply;
