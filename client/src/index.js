import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-9w-9zvfo.us.auth0.com"
    clientId="aUWfgytymYIWF018xm2Xe4rJopEKkvQs"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

