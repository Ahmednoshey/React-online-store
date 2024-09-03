import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider,
  createRoutesFromElements, Route} from "react-router-dom";
import Root from 'pages/Root';
import Home from 'pages/Home/Home';
import Create from 'pages/create/Create';
import Detailsproduct from 'pages/details product/detailsproduct';
import OnlineStore from 'pages/onlinestore/OnlineStore';
import Cart from 'pages/cart/Cart';
import NotFound from 'pages/NotFound';
import * as serviceworkerRegistration from './serviceWorkerRegistration'
import { Provider } from 'react-redux';
import { store } from './Redux/store';


const router = createBrowserRouter(
  createRoutesFromElements(

  
    <Route path="/" element={<Root />}>
    
    <Route index element={<Home />} />
    <Route path="create" element={<Create />} />
    <Route path="onlinestore" element={<OnlineStore />} />
    <Route path="cart" element={<Cart />} />
    <Route path="details-product/:id" element={<Detailsproduct />} />
    <Route path="*" element={<NotFound />} />
  
    
    </Route>
  )
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
<RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);

serviceworkerRegistration.register()