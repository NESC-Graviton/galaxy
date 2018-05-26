# galaxy-client
前端数据采集工具

# 示例
在HTML文件中添加如下代码：

```html
<script type="text/javascript">
    !function(){"use strict";var e,t="_ga_queue",i="_ga_config",r=["setUid","trackPageView","trackEvent"];e={identifier:"ga",sdk_url:"./galaxy.js",report_url:"localhost:3000"},window["_ga_identifier"]=e.identifier,window[e.identifier]=window[e.identifier]||function(){for(var e={},i=0,n=r;i<n.length;i++){var a=n[i];e[a]=s.bind(e,a)}return e;function s(e){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];this[t]=this[t]||[],this[t].push({callee:e,params:i})}}(),window[i]=e,function(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=e.sdk_url;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}(e)}();

    ga.setUid('jx02');
    ga.trackPageView();
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
ga.trackPageView();
```

* 记录事件：

```ts
ga.trackEvent(action: string, payload: any, category: string = 'default')
```

# Develop

```bash
# Clone the repo
git clone https://github.com/NESC-Graviton/galaxy

# go to folder
cd packages/galaxy-sdk

# Install deps
npm i

# Run dev
npm run dev
```
