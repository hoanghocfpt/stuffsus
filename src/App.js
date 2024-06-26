
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './home/HomePage';
import BlogPage from './blog/BlogPage';
import ShopPage from './shop/ShopPage';
import HeaderCompoent from './components/header/HeaderCompoent';
import FooterComponent from './components/footer/FooterComponent';
import ProductDetail from './product/ProductDetail';
import LoginPage from './login/LoginPage';
import SignUpPage from './signup/SignUpPage';

function App() {
  return (
    <>
      <div>
        <HeaderCompoent />
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/blog" Component={BlogPage}/>
            <Route path="/cua-hang" Component={ShopPage} />
            <Route path='/san-pham/:slug' element={<ProductDetail />} />
            {/* login & sign up */}
            <Route path="/dang-nhap" Component={LoginPage} />
            <Route path="/dang-ky" Component={SignUpPage} />
        </Routes>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
