import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NoteFound';
import RequireAuth from './components/RequireAuth/RequireAuth';

import { Routes,Route } from 'react-router-dom';
import AddProduct from './Pages/AddProduct/AddProduct';
import Update from './components/Update/Update';
import AllProduct from './components/AllProduct/AllProduct';
import Inventory from './Pages/Inventory/Inventory';
import MyItems from './Pages/MyItems/MyItems';
import ReStock from './components/ReStock/ReStock';

function App() {
  return (
    <>

  
      <Header></Header>
      {/* <Home></Home> */}


      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/my-items' element={<MyItems></MyItems>}></Route>
       <Route path='/restock/:id' element={<ReStock></ReStock>}></Route>
       {/* <Route path='/inventory' element={<AllProduct></AllProduct>}></Route> */}
       <Route path='/inventory' element={<RequireAuth>
        <Inventory></Inventory>
       </RequireAuth>}></Route>
       
       <Route path='/manage-inventory' element={<RequireAuth>
        <Inventory></Inventory>
       </RequireAuth>}></Route>

       <Route path='/inventory/:id' element={<RequireAuth>

        <Update></Update>
       </RequireAuth>}></Route>
       <Route path='/add' element={
         <RequireAuth>
           <AddProduct></AddProduct>
         </RequireAuth>
       }></Route>


       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
      <ToastContainer></ToastContainer>
      {/* <Register></Register>
      <Login></Login> */}



      <Footer></Footer>
    </>
    
  );
}

export default App;
