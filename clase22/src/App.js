import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';
import './App.css'

import HomePage from './pages/HomePage';
import { Ejemplo1 } from './pages/Ejemplo1';
import Ejemplo2 from './pages/Ejemplo2';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path= '/' element= {<HomePage/>}></Route>
          <Route path= '/Ejemplo1' element= {<Ejemplo1/>}></Route>
          <Route path= '/Ejemplo2' element= {<Ejemplo2/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
