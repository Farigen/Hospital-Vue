# hospital

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## 关于跨域

本项目在构建初期是以跨域的方式访问后端，之后为了将前后端整合，将Vue并入了Springboot项目中，但Vue中相关的跨域配置几乎未变，仅将axios请求的url进行了相应的改变，删去了"http://localhost:8081"，故如之后项目想要前后端分离，只需在axios请求的url上加上即可。



## Vue的history模式

本系统开启了Vue 的history模式，当本系统部署在本机时，无任何影响；当部署在服务器上时，需要对服务器进行相应的设置，详见[Vue History模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html)。

