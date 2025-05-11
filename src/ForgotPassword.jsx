import React from 'react';

const ForgotPassword = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-md flex flex-col items-center">
      {/* Logo */}
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Bluestock_logo.png" alt="Bluestock Logo" className="h-10 mb-6" />
      {/* Title */}
      <h2 className="text-xl font-bold mb-2 tracking-wide text-gray-800">Forgot Password?</h2>
      <div className="text-sm text-gray-600 mb-6 text-center">
        Enter your email address to get the password reset link.
      </div>
      <form className="w-full flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input type="email" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="hello@bluestock.in" />
        </div>
        <button type="submit" className="w-full bg-indigo-500 text-white rounded px-4 py-2 font-semibold hover:bg-indigo-600 transition">Password Reset</button>
      </form>
      <a href="#" className="mt-6 text-indigo-600 hover:underline text-sm">Back to login</a>
      {/* Placeholder for reCAPTCHA */}
      <div className="fixed bottom-4 right-4 flex items-center justify-center bg-gray-100 rounded px-4 py-2">
        <span className="text-xs text-gray-500">[reCAPTCHA here]</span>
      </div>
    </div>
  </div>
);

export default ForgotPassword;
