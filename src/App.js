import React from 'react';
import { Header } from './Components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./Components/Paginas"
import { Dataprovider } from './Context/Dataprovider';
import { Carrito } from './Components/Carrito';
import { Footer } from './Components/Footer';



function App() {
  return (
    <Dataprovider>
      <div className="App">
        <Router>
          <Header />
          <Carrito/>
          <Paginas />
          <Footer/>
        </Router>
      </div>
    </Dataprovider>
  );
}

export default App;
