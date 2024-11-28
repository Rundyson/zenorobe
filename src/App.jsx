
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/frontend/home/Home';
import { StoreProvider } from './components/pages/backend/partials/store/storeContext';
import Clothes from './components/pages/backend/clothes/Clothes';
import LatestProducts from './components/pages/backend/latestproducts/LatestProducts';
import Dashboard from './components/pages/backend/dashboard/Dashboard';
import Login from './components/pages/backend/access/Login';
import SetPassword from './components/pages/backend/access/SetPassword';
import ForgotPassword from './components/pages/backend/access/ForgotPassword';
import Category from './components/pages/backend/category/Category';


const App = () => {
  return (
    <StoreProvider>
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/admin/clothes" element={<Clothes/>}/>
        <Route path="/admin/latestproducts" element={<LatestProducts/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/category" element={<Category/>}/>

        <Route path="/admin/login" element ={<Login/>} />
        <Route path="/admin/set-password" element ={<SetPassword/>} />
        <Route path="/admin/forgot-password" element ={<ForgotPassword/>} />
      </Routes>
    </Router>
    </StoreProvider>
  );
}

export default App
