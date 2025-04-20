import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-u2q8ttozips0ckyh.us.auth0.com"
      clientId="I4BAsNgy2juDb1UmYus5ANdc7JB6ZXvV"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </StrictMode>,
)

// TRRNmMjTZllm9JC2j0v_w9hJu2XYel1qg0JoF46HNRm20GWmgslcR0QG1I4unOpL
