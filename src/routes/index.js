import {routes} from './routes';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

const router = new Router({
    routes,
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash};
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0};
        }
    }
});

export default router;