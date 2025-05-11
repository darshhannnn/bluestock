import React from 'react';
import { Link } from 'react-router-dom';
import { SignIn } from "@clerk/clerk-react";

const LOGO_URL = "/logo.png";

const Login = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', padding: '1rem' }}>
  <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-8 mx-auto border border-gray-100 flex flex-col items-center">
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}>
  <img src={LOGO_URL} alt="Bluestock Logo" style={{ maxWidth: '140px', height: 'auto', display: 'block', margin: '0 auto' }} className="mb-2" />
</div>

    {/* Custom Login Form */}
    <form style={{ width: '100%' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.3rem', fontWeight: 500 }}>Email address</label>
        <input type="email" placeholder="Enter your email address" style={{ width: '100%', border: '1px solid #ddd', borderRadius: '5px', padding: '0.7rem', fontSize: '1rem' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
          <label style={{ fontWeight: 500, margin: 0 }}>Password</label>
          <a href="/forgot-password" style={{ color: '#6366f1', textDecoration: 'underline', fontSize: '0.97rem', marginLeft: '1rem', whiteSpace: 'nowrap' }}>Forgot password?</a>
        </div>
        <input type="password" placeholder="Enter your password" style={{ width: '100%', border: '1px solid #ddd', borderRadius: '5px', padding: '0.7rem', fontSize: '1rem' }} />
      </div>
      {/* Checkboxes after password */}
      <div style={{ width: '100%', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.96rem' }}>
          <input type="checkbox" style={{ marginRight: '0.5rem' }} /> I'm not a robot
        </label>
        <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.96rem' }}>
          <input type="checkbox" style={{ marginRight: '0.5rem' }} /> Keep me signed in
        </label>
      </div>
      <button type="submit" style={{ width: '100%', background: '#6366f1', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.8rem', fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem', cursor: 'pointer' }}>Continue</button>
      <button type="button" style={{ width: '100%', background: '#fff', border: '1px solid #ddd', borderRadius: '6px', padding: '0.7rem', marginBottom: '0.5rem', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '1rem' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" style={{ width: '22px', height: '22px' }} />
        Continue with Google
      </button>
    </form>
    {/* Create account link at the bottom */}
    <div style={{ width: '100%', marginTop: '1.5rem', textAlign: 'center' }}>
      <span style={{ fontSize: '1rem', color: '#444' }}>Don't have an account? </span>
      <Link to="/signup" style={{ color: '#6366f1', textDecoration: 'underline', fontWeight: 500, fontSize: '1rem' }}>Create an account</Link>
    </div>
  </div>
</div>
  );
};

export default Login;