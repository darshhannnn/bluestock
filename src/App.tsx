import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import Login from './Login';

function Dashboard() {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', background: '#f5f5f5' }}>
        <UserButton />
      </header>
      <main>
        <h2>Welcome to the Dashboard!</h2>
        {/* Your protected content here */}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Navigate to="/sign-in" replace />
              </SignedOut>
            </>
          }
        />
        <Route path="/sign-in" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}