import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import Login from './components/Common/UserAuth/Login';
import Home from './components/Home/Home';
import ManageInventories from './components/ManageInventories/ManageInventories';
import UpdateStockItem from './components/ManegeStock/UpdateStockItem';
import Products from './components/Products/Products';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UpdateStockItem" element={<UpdateStockItem />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/inventory/:id" element={<UpdateStockItem />} />
        <Route path="/ManageInventories" element={<ManageInventories />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
