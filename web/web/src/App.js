import React from 'react';
import style from './App.module.scss'
import './normalize.scss'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Product from './components/Product/Product';
import Personal from './components/Personal/Personal';
import Basket from './components/Basket/Basket';
import Compare from './components/Compare/Compare';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <HeaderContainer />
        <div className={style.main}>
          <div className={style.container}>
            <Switch>
              <Route exact path='/' render={() => (<Catalog />)} />
              <Route path='/personal' render={() => (<Personal />)} />
              <Route path='/product/:phoneId?' render={() => (<Product />)} />
              <Route path='/basket' render={() => (<Basket />)} />
              <Route path='/compare' render={() => (<Compare />)} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
