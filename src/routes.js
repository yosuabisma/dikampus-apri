import MainPage from './components/MainPage.vue';
import DetailPage from './components/DetailPage.vue';
import DetailMerchantPage from './components/DetailMerchantPage.vue';
import Category from './components/Category.vue';
import Login from './components/LoginPage.vue';
import Register from './components/RegisterPage.vue';
import RegisterEmail from './components/RegisterEmailPage.vue';
import UploadJualan from './components/UploadJualan.vue';
import Warung from './components/Warung.vue';

export default [
  {path: '/', component: MainPage},
  {path: '/detail', component: DetailPage},
  {path: '/detail-merchant', component: DetailMerchantPage},
  {path: '/category', component: Category},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/register-email', component: RegisterEmail},
  {path: '/upload-jualan', component: UploadJualan},
  {path: '/warung', component: Warung},
]
