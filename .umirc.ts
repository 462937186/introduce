import { defineConfig } from 'umi';

export default defineConfig({
  base: '/introduce',
  publicPath: '/introduce/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/app' }],
  fastRefresh: {},
});
