import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from './context/Provider';
import {BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
    </Provider>,   document.getElementById('root'))
  

// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
