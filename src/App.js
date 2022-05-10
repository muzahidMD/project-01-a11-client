import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/AddProduct/AddProduct';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Footer from './Pages/shared/Footer/Footer';
import Header from './Pages/shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductDetail />
          </RequireAuth>
        }></Route>
        <Route path='/addproduct' element={
          <RequireAuth>
            <AddProduct />
          </RequireAuth>
        }></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
