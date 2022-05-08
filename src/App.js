import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/Shared/RequireAuth/RequireAuth';
import { ToastContainer} from 'react-toastify';
import ManageInventories from './Components/ManageInventories/ManageInventories';
import AddItem from './Components/AddItem/AddItem';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/ManageInventories' element={
        
        <RequireAuth>
          <ManageInventories>
        </ManageInventories>
        </RequireAuth>
        }></Route>
        <Route path='/additem' element={
        
        <RequireAuth>
        <AddItem></AddItem>
        </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
