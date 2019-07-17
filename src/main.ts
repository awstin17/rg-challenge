import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import "bootstrap"
import "./styles.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faUserSecret,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import AOS from "aos"
import "aos/dist/aos.css"

library.add(faUserSecret, faAngleLeft, faAngleRight)
Vue.component("font-awesome-icon", FontAwesomeIcon)
Vue.config.productionTip = false

AOS.init()

new Vue({
  created() {
    AOS.init()
  },
  render: h => h(App)
}).$mount("#app")
