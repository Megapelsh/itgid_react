import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import CategoryDescription from './CategoryDescription';
import Error404 from "./Error404";

function App() {
  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/cat' element={<Category />}/>
          <Route path='/cat/:catName' element={<CategoryDescription />}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </Router>

      <Footer />
    
    </>
  );
}

export default App;
