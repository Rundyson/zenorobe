
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/frontend/home/Home';
import { StoreProvider } from './components/store/storeContext';
import Clothes from './components/pages/backend/clothes/Clothes';
import LatestProducts from './components/pages/backend/latestproducts/LatestProducts';
import Dashboard from './components/pages/backend/dashboard/Dashboard';
import Login from './components/pages/backend/access/Login';
import SetPassword from './components/pages/backend/access/SetPassword';
import ForgotPassword from './components/pages/backend/access/ForgotPassword';
import Category from './components/pages/backend/category/Category';
import ProductInfo from './components/pages/frontend/product-info/ProductInfo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Banner from './components/pages/backend/banner/Banner';


const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <StoreProvider>
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/admin/clothes" element={<Clothes/>}/>
        <Route path="/admin/latestproducts" element={<LatestProducts/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/category" element={<Category/>}/>
        <Route path="/admin/banner" element={<Banner/>}/>
        <Route path="/product/:slug" element={<ProductInfo/>}/>

        <Route path="/admin/login" element ={<Login/>} />
        <Route path="/admin/set-password" element ={<SetPassword/>} />
        <Route path="/admin/forgot-password" element ={<ForgotPassword/>} />
      </Routes>
    </Router>
    </StoreProvider>
    </QueryClientProvider>
  );
}

export default App
