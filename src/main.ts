import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faUserSecret,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faUserSecret, faAngleLeft, faAngleRight)

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
