import Home from '~/pages/Home/home';
import Following from '~/pages/Following/following';
import Profile from '~/pages/Profile/profile';
import Upload from '~/pages/Upload/upload';
import Seach from '~/pages/Search/search';
import HeaderOnlyLayout from '~/components/Layout/HeaderOnlyLayout';

// cho các Router không cần đăng nhập cũng xem được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
    { path: '/seach', component: Seach, layout: null },
];

// cho các router càn phải đăng nhập mới xem dc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
