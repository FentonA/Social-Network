import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './views/home.vue'

//tell vue that we are using vue router as a plugin
Vue.use(VueRouter);


//vue router instance 
export default new VueRouter({
    mode:'history',

    routes: [
        {
            path: '/', name: 'homepage', component: home, 
        }
    ]
})