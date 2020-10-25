import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/Home.vue'
import About from './view/About.vue'
import Contact from './view/Contact.vue'

Vue.use(Router)

//création des routes


//exportation des routes
export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact/:id',
        name: 'contact',
        component: Contact
    }
    ]
})

