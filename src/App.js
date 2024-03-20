import React from 'react';
import About from './component/about/About';
import Header from './component/header/header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import *as servieWorker from "./serviceWorker";


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
// servieWorker.register();
