import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-500 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Form</h1>
          {/* Add any additional navbar elements, e.g., navigation links */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;