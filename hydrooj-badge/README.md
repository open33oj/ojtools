# Badge

更方便的发徽章页面！

新路由及对应权限：

```js
async function apply() {
    //展示所有有徽章的用户
    Route('badge_show', '/badge', BadgeShowHandler, PRIV.PRIV_USER_PROFILE);
    //新建/修改、管理/删除徽章
    Route('badge_create', '/badge/create', BadgeCreateHandler, PRIV.PRIV_CREATE_DOMAIN);
    Route('badge_manage', '/badge/manage', BadgeManageHandler, PRIV.PRIV_CREATE_DOMAIN);
    Route('badge_del', '/badge/manage/:id/del', BadgeDelHandler, PRIV.PRIV_CREATE_DOMAIN);
}
```