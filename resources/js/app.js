/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import {BootstrapVue,IconsPlugin} from  'bootstrap-vue'
import VueRouter from 'vue-router'
window.Vue = require('vue');
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('products', require('./components/Products.vue').default);
Vue.component('footer-vue', require('./components/Footer.vue').default);
Vue.component('product-detail', require('./components/ProductDetail.vue').default);
Vue.component('product-category', require('./components/CategoryProduct.vue').default);

const routes=[
    {path:'/',component: require('./components/Products.vue').default},
    {path:'/detay/:id', props:true, component: require('./components/ProductDetail.vue').default},
    {path:'/category/:category_id', props:true, component: require('./components/CategoryProduct.vue').default, name:'category'}

]
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    routes:routes,
})

const app = new Vue({
    router,
    el: '#app',
});
