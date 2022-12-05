//Default React Imports, as well as Bootstrap's css for a few bootstrap components used.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//Renders App.js, on the root element from the HTML folder.
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);


