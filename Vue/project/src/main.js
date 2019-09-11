// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { injectGlobal } from 'vue-styled-components';
import App from './App';
import { thirdTheme } from '../src/components/themes';

Vue.config.productionTip = false;
/* eslint-disable no-unused-expressions */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  body {
    font-family: 'Roboto';
    background: ${thirdTheme.body.backgroundColor}
      url("../static/${thirdTheme.body.backgroundImageUrl}");
  }
`;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
