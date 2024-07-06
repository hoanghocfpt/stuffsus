
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './home/HomePage';
import BlogPage from './blog/BlogPage';
import ShopPage from './shop/ShopPage';
import HeaderCompoent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import ProductDetail from './product/ProductDetail';
import LoginPage from './login/LoginPage';
import SignUpPage from './signup/SignUpPage';
import CartPage from './cart/CartPage';

function App() {
  return (
    <>
      <div>
        <HeaderCompoent />
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/blog" Component={BlogPage}/>
            <Route path="/cua-hang" Component={ShopPage} />
            {/* Category */}
            <Route path="/cua-hang/:category" Component={ShopPage} />
            <Route path='/san-pham/:slug' Component={ProductDetail} />
            {/* login & sign up */}
            <Route path="/dang-nhap" Component={LoginPage} />
            <Route path="/dang-ky" Component={SignUpPage} />
            {/* cart */}
            <Route path='/gio-hang' Component={CartPage}/>
        </Routes>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
