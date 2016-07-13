import Vue from 'vue';
import App from './App';
import Home from './components/Home.vue';
import TimeEntries from './components/TimeEntries.vue';
import LogTime from './components/LogTime.vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// Apply router and resource to our vue instance
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

// Pointing routes to the components they should use
router.map({
  '/home': {
    component: Home,
  },
  '/time-entries': {
    component: TimeEntries,
    subRoutes: {
      '/log-time': {
        component: LogTime
      }
    }
  },
});

// Any invalid route will redirect to home
router.redirect({
  '*': '/home',
});

router.start(App, '#app');
