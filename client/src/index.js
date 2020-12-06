import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';

ReactDOM.render(
  <Auth0Provider
    domain="dev-pebipq1k.us.auth0.com"
    clientId="Bqt2EeWzJuBvLGZGrnINb79lAnA9D8qr"
    redirectUri={`${window.location.origin}/profile`}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);