import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from './context/Provider';

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>,   document.getElementById('root'))
  

// ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
