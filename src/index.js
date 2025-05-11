import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import {ClerkProvider} from '@clerk/clerk-react';
const clerkPubKey='pk_test_cXVhbGl0eS1ncml6emx5LTI5LmNsZXJrLmFjY291bnRzLmRldiQ';
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
reportWebVitals();