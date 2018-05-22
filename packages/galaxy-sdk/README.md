# galaxy-client
前端数据采集工具

# 示例
在HTML文件中添加如下代码：

```html
<script type="text/javascript">
    !function () { "use strict"; var e, i = "_ga_queue", t = "_ga_config", r = ["setUid", "pageView", "track"]; e = { identifier: "ga", sdk_url: "./galaxy.js", report_url: "localhost:3000" }, window["_ga_identifier"] = e.identifier, window[e.identifier] = window[e.identifier] || function () { for (var e = {}, t = 0, n = r; t < n.length; t++) { var a = n[t]; e[a] = s.bind(e, a) } return e; function s(e) { for (var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r]; this[i] = this[i] || [], this[i].push({ callee: e, params: t }) } }(), window[t] = e, function (e) { var i = document.createElement("script"); i.type = "text/javascript", i.async = !0, i.src = e.sdk_url; var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(i, t) }(e) }();

    ga.setUid('jx02');
    ga.pageView();
</script>
```



# API

* 设置登录用户ID：

```ts
ga.setUid(uid:string);
```

每次发往后端的日志记录都将包含该用户ID。

* 记录当前页面信息：

```ts
ga.pageView();
```

* 记录事件：

```ts
ga.track(action:string,payload:any); //若不设置category，则默认category为'default'。
ga.track(action:string,category:string,payload:any);
```

