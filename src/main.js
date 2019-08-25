// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
//自定义指令
Vue.directive("rainbow",{
   //el 代表绑定的元素
    bind(el,bind,vnode)
    {
      el.style.color="red";
    }
});
Vue.directive("theme",{
  //bind是传入的值
  bind(el,bind,vnode)
  {
    if(bind.value=="wide")
    {
      el.style.maxWidth="1200px";
    }else if(bind.value=="narrow")
    {
      el.style.maxWidth="560px";
    }
    if(bind.arg=="column")
    {
      el.style.background="#666666";
    }
  }
})
//自定义过滤器
/*Vue.filter("to-uppercase",function(value)
{
  //value 是 | 前面的变量
  return value.toUpperCase();
});*/
Vue.filter("snippet",function(value)
{
  return value.slice(0,100)+"..."; 
})
 const router=new VueRouter({
   routes:Routes,
   mode:"history"  //去掉#
 });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
