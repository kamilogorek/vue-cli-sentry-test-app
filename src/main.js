import Vue from 'vue'
import App from './App.vue'
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

Vue.config.productionTip = false
Sentry.init({
  dsn: "<YOUR_DSN>",
  integrations: [new Integrations.Vue({ Vue, attachProps: true, logErrors: true })],
  release: "foo"
});


new Vue({
  render: h => h(App),
}).$mount('#app')
