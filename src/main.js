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
    component: require('./pages/list.md'),
    subRoutes: {
      '/basic': {component: require('./pages/grammar/basic.md')},
      '/types': {component: require('./pages/grammar/types.md')},
      '/string': {component: require('./pages/grammar/string.md')},
      '/number': {component: require('./pages/grammar/number.md')},
      '/array': {component: require('./pages/grammar/array.md')},
      '/object': {component: require('./pages/grammar/object.md')},
      '/function': {component: require('./pages/grammar/function.md')},
      '/error': {component: require('./pages/grammar/error.md')},
      '/operator': {component: require('./pages/grammar/operator.md')},
      '/conversion': {component: require('./pages/grammar/conversion.md')},
      '/style': {component: require('./pages/grammar/style.md')}
    }
  },
  '/stdlib': {
    component: require('./pages/list.md'),
    subRoutes: {}
  },
  '/oop': {
    component: require('./pages/list.md'),
    subRoutes: {}
  },
  '/advanced': {
    component: require('./pages/list.md'),
    subRoutes: {}
  },
  '/dom': {
    component: require('./pages/list.md'),
    subRoutes: {}
  },
  '/bom': {
    component: require('./pages/list.md'),
    subRoutes: {}
  }
});

router.start(App, 'app');
