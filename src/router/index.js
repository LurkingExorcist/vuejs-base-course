import VueRouter from 'vue-router'

import Artists from '../pages/Artists.vue'
import Radio from '../pages/Radio.vue'
import Search from '../pages/Search.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Radio
        }, 
        {
            path: '/artists',
            component: Artists
        }, 
        {
            path: '/search',
            component: Search
        }
    ]
})