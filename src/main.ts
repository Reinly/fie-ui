import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory ,createRouter} from 'vue-router'
import Fie from './components/Fie.vue'
import Fie2 from './components/Fie2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Fie},
        {path: '/xxx', component: Fie2}
    ]
})

const app =  createApp(App)
app.use(router)
app.mount('#app')
