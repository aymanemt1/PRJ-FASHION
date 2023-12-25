
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import { App } from './Ecommerce/Pages/App';
import { BrowserRouter } from 'react-router-dom';

import './Ecommerce/global.css'

import './Ecommerce/Composants/footer/footer.css'
import './Ecommerce/Composants/ListeProducts/listeProducts.css'
import './Ecommerce/Composants/loading/loading.css'
import './Ecommerce/Composants/DetailProducts/detailproducts.css'
import './Ecommerce/Composants/Header/header.css'
import './Ecommerce/Composants/Main/main.css'
import './Ecommerce/Composants/services/service.css'
import './Ecommerce/Composants/shop/shop.css'
import "./Ecommerce/Composants/Offres/offres.css"
import './Ecommerce/Composants/Categories/categories.css'
import './Ecommerce/Composants/About/about.css'

import { legacy_createStore } from 'redux';
import { cartReducer } from './Ecommerce/Redux/reducer';
import { Provider } from 'react-redux';


const element=document.getElementById("root");
const root=ReactDOM.createRoot(element)

const store =legacy_createStore(cartReducer)
root.render(
  <BrowserRouter >
<Provider store={store}>
      <App  />
</Provider>
    </BrowserRouter>
)

