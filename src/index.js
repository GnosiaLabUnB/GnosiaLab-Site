import './assets/css/theme.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from "./context/UserContext";

/*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/
Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <UserProvider>
        <App/>
      </UserProvider>
    </BrowserRouter>
);
