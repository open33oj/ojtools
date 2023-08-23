# Sidebar Nav

可以在控制面板设置的边栏导航

## 使用

进入 HydroOJ 控制面板 - 系统设置 - hydrooj - 首页，配置好需要展示的链接

一个例子：

```
  sidebar_nav:
    - title: 常用功能
      urls:
      - name: "33 百科"
        url: https://wiki.33dai.cn
      - name: 云剪贴板
        url: //oj.33dai.cn/paste/manage
      - name: 查看徽章
        url: //oj.33dai.cn/badge
    - title: 镜像文档
      urls:
      - name: C++ 文档
        url: https://cpp.33dai.cn
      - name: Python 文档
        url: https://py.33dai.cn
      - name: OI Wiki       
        url: https://oiwiki.33dai.cn
    - title: 常用 OJ
      urls:
      - name: HydroOJ
        url: https://hydro.ac/
      - name: LibreOJ
        url: https://loj.ac/
      - name: 洛谷
        url: https://www.luogu.com.cn/
      - name: AtCoder
        url: https://atcoder.jp/
      - name: CodeForces
        url: https://codeforces.com/
      - name: TYOJ
        url: https://8.130.24.160:19443/
    - title: 工具
      urls:
      - name: NOI 官网
        url: https://www.noi.cn/
      - name: OI-Wiki
        url: https://oi-wiki.org/
      - name: OIerDB
        url: https://www.信息学.com/
      - name: Graph_Editor
        url: https://csacademy.com/app/graph_editor/
      - name: OEIS
        url: http://oeis.org/
      - name: GeoGebra
        url: https://www.geogebra.org/graphing

```