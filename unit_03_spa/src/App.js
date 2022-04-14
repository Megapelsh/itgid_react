import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import CategoryDescription from './CategoryDescription';
import Error404 from "./Error404";

const menu1 = [
  { "link": "/", "title": "Главная" },
  { "link": "/about", "title": "О сайте" },
  { "link": "/cat", "title": "Категории" },
]

const menu2 = [
  { "link": "/cat/notebook", "title": "Ноутбуки" },
  { "link": "/cat/monitor", "title": "Мониторы" },
  { "link": "/cat/cellphone", "title": "Мобильные телефоны" },
]

function App() {
  return (
    <>
      <Router>
      <Header nav = {menu1}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/cat' element={<Category nav = {menu2}/>}/>
          <Route path='/cat/:catName' element={<CategoryDescription />}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </Router>

      <Footer />
    
    </>
  );
}

export default App;
