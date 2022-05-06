import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Inventory from './Components/Inventory/Inventory';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import MyPage from './Components/MyPage/MyPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Components/ProductDetails/ProductDetails';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/allinventory" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyPage></MyPage>
          </RequireAuth>
        }></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path='/productDetails/:id' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
