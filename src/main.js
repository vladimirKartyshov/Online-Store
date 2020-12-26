import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import * as fb from 'firebase/app'
import  fb from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyCnCgY7iheiWo4AkvqvKdxlhO7KxntwpKY',
      authDomain: 'onlinestore-ccb49.firebaseapp.com',
      databaseURL: 'https://onlinestore-ccb49.firebaseio.com',
      projectId: 'onlinestore-ccb49',
      storageBucket: 'onlinestore-ccb49.appspot.com',
      messagingSenderId: '1003997229011',
      appId: '1:1003997229011:web:efce6629b58ae4caaa4926'
    }
    // Initialize Firebase
    fb.initializeApp(firebaseConfig)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
}).$mount('#app')

