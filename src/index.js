import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { Contain } from './Contain';

ReactDOM.render(
  <Contain>
  <Router>
   <App />
  </Router>
  </Contain>,
  document.getElementById('root')
);

