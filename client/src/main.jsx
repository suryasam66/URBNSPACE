import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-ftlqmxc8qkexr2uw.us.auth0.com"
     clientId="ATdLv65WM1rwkJlyjnvtYqHouC5WQeU3"
     authorizationParams={{
      redirect_uri: "https://urbnspace-lime.vercel.app",
     }}
    
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
