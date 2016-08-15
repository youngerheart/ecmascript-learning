import Vue from 'vue';
import App from './app';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  hashbang: true,
  history: false
});

router.map({
  '/': {component: require('./pages/index.vue')},
  '/grammar': {
    component: require('./pages/grammar/index.md'),
    subRoutes: {
      '/basic': require('./pages/grammar/basic.md')
    }
  },
  '/stdlib': {component: require('./pages/stdlib/index.vue')},
  '/oop': {component: require('./pages/oop/index.vue')},
  '/advanced': {component: require('./pages/advanced/index.vue')},
  '/dom': {component: require('./pages/dom/index.vue')},
  '/bom': {component: require('./pages/bom/index.vue')}
});

router.start(App, 'app');
