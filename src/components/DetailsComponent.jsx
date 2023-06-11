import React from 'react';

const DetailsComponent = ({ name, address, email, onGoBack }) => {
  const handleGoBack = () => {
    onGoBack();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-gray-100 p-6 rounded-md shadow-md w-full sm:max-w-md">
        <h2 className="text-2xl font-bold mb-4">Submitted Details:</h2>
        <p className="text-lg">
          <span className="font-bold">Name:</span> {name}
        </p>
        <p className="text-lg">
          <span className="font-bold">Address:</span> {address}
        </p>
        <p className="text-lg">
          <span className="font-bold">Email:</span> {email}
        </p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded-md"
        onClick={handleGoBack}
      >
        Go Back to Form
      </button>
    </div>
  );
};

export default DetailsComponent;

