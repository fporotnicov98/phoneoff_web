import React from 'react';
import './main.scss'
import './normalize.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import { Route, BrowserRouter } from 'react-router-dom';
import Product from './components/Product/Product';
import Personal from './components/Personal/Personal';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        {/* <Catalog />  */}
        <Personal />
        {/* <Product /> */}
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
