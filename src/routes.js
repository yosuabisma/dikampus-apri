import MainPage from './components/MainPage.vue';
import DetailPage from './components/DetailPage.vue';
import DetailMerchantPage from './components/DetailMerchantPage.vue';
export default [
  {path: '/', component: MainPage},
  {path: '/detail', component: DetailPage},
  {path: '/detail-merchant', component: DetailMerchantPage},
]
