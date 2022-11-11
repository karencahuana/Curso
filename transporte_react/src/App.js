import '../src/styles/normalize.css'
import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import './App.css';
import HomePage from './pages/Homepage'
import NosotrosPage from './pages/NosotrosPage'
import ServiciosPage from './pages/ServiciosPage'
import GaleriaPage from './pages/GaleriaPage'
import ContactoPage from './pages/ContactoPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path='/' element= {<HomePage/>}></Route>
            <Route path='/nosotros' element= {<NosotrosPage/>}></Route>
            <Route path='/servicios' element= {<ServiciosPage/>}></Route>
            <Route path='/galeria' element= {<GaleriaPage/>}></Route>
            <Route path='/contacto' element= {<ContactoPage/>}></Route>

          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
