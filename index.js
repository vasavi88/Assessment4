import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/store';
import { Provider } from "react-redux";
import App from './App';
// import 'jquery/dist/jquery.min.js';
// import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  // <React.StrictMode>
   <Provider store={store}>  <App /></Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

