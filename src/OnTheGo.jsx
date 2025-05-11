import React from 'react';

const OnTheGo = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="bg-white rounded-lg shadow-lg flex w-full max-w-5xl overflow-hidden">
      {/* Left: Text and QR */}
      <div className="flex-1 flex flex-col justify-center items-start p-12">
        <h2 className="text-3xl font-bold mb-4">On The Go</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          We believe that everyone should be able to wield technology while learning trading. Use Bluestock on the go, on your mobile device. Experience the ultimate trading experience on Android or iOS.
        </p>
        <div className="flex items-center gap-6">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://bluestock.app/download" alt="QR Code" className="h-24 w-24" />
          <div>
            <div className="font-semibold text-indigo-600 mb-1">Scan and download</div>
            <div className="text-gray-500 text-sm">Use your android device to download the app</div>
          </div>
        </div>
      </div>
      {/* Right: Mobile Screenshot */}
      <div className="flex-1 flex justify-center items-center bg-gray-100 p-8">
        <img src="https://i.ibb.co/0Jmshvb/mobile-app-ui.png" alt="Bluestock Mobile App" className="h-96 rounded-2xl shadow-lg border" />
      </div>
    </div>
  </div>
);

export default OnTheGo;
