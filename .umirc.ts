import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  publicPath: '/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/app' }],
  fastRefresh: {},
});
