// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import CompanyOverview from '@/views/CompanyOverview.vue'; // 各ページに対応するコンポーネントをインポート
import AccessPoint from '@/views/AccessPoint.vue';
import ProductIntroduction from '@/views/ProductIntroduction.vue';
import CompanyQuery from '@/views/CompanyQuery.vue';
// import App from '@/App.vue'; // App.vue ファイルのパスを適切に指定する

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    components: {
      default: CompanyOverview,  // デフォルトビュー
      box1: CompanyOverview,     // 名前付きビュー 'box2'
      box2: ProductIntroduction, // 名前付きビュー 'box3'
      box3: AccessPoint, // 名前付きビュー 'box3'
      box4: CompanyQuery // 名前付きビュー 'box3'
    }
  },
  // 他のルート定義
];

const router = new VueRouter({
  routes
});

export default router;