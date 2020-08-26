import Accueil from './components/Accueil.vue'
import Contact from './components/Contact.vue'
import Reception from './components/Reception.vue'

export const routes = [
    {path: '/', component: Accueil},
    {path: '/contact', component: Contact},
    {path: '/reception', component: Reception}
];