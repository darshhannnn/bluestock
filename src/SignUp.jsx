import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', padding: '1rem' }}>
    <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-8 mx-auto border border-gray-100 flex flex-col items-center">
      <SignUp
        appearance={{
          elements: {
            card: { boxShadow: 'none', border: 'none' },
            headerTitle: { fontWeight: 'bold', fontSize: '2rem', color: '#2d2d2d' },
            headerSubtitle: { color: '#555' }
          }
        }}
      />
    </div>
  </div>
);

export default SignUpPage;
