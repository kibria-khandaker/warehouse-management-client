import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import Login from './components/Common/UserAuth/Login';
import Home from './components/Home/Home';
import ManegeStock from './components/ManegeStock/ManegeStock';
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
        <Route path="/ManegeStock" element={<ManegeStock />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
