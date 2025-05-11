import React from 'react';

const BrandGuide = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="bg-white rounded-lg shadow p-10 w-full max-w-5xl flex flex-col">
      <div className="flex flex-row items-start justify-between">
        <div>
          <div className="text-4xl font-extrabold text-red-400 mb-2">Brand Guide</div>
          <div className="text-lg font-semibold text-gray-800 mb-6">Bluestock Fintech</div>
        </div>
        <div className="flex flex-row gap-16 w-full justify-center">
          <div>
            <div className="font-semibold text-lg mb-2">Fonts</div>
            <ol className="list-decimal ml-5 text-gray-700">
              <li>Poppins</li>
              <li>Poppins-Semi-Bold</li>
              <li>Flutter Default - Roboto</li>
              <li>&nbsp;</li>
            </ol>
          </div>
          <div>
            <div className="font-semibold text-lg mb-2">Icons</div>
            <ol className="list-decimal ml-5 text-blue-600">
              <li><a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">https://www.flaticon.com/</a></li>
              <li><a href="https://fontawesome.com/search?q=settings&o=free" target="_blank" rel="noopener noreferrer" className="hover:underline">https://fontawesome.com/search?q=settings&o=free</a></li>
              <li><a href="https://m-nor.github.io/cli/" target="_blank" rel="noopener noreferrer" className="hover:underline">https://m-nor.github.io/cli/</a></li>
            </ol>
          </div>
        </div>
        <div className="text-gray-400 text-sm absolute bottom-8 right-12 select-none">www.bluestock.in</div>
      </div>
    </div>
  </div>
);

export default BrandGuide;
