import Vue from 'vue'
import Router from 'vue-router'
import Booking from './components/Booking.vue'
Vue.use(Router);

const router    =    new Router({
    mode:       'history',
    routes:     [
        {
             path:          '/booking',
             component:     Booking
        }
    ]
});

export default router;