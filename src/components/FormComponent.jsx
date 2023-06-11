import React, { useState } from 'react';

//toast messages
import { toast } from "react-hot-toast";



const FormComponent = ({ onSubmit })=> {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if(name===''){
      toast.error("Name is required");
      return;
      
      
    }
    if(email===''){
      toast.error("Email is required");
      return;
    }
    if(address===''){
      toast.error("Address is required");
      return;
    }

    // Call the onSubmit prop with the submitted data
    onSubmit({ name, address, email });

    // Reset the form fields
    setName('');
    setAddress('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5 ">
      <div className="mb-4 ">
        <label htmlFor="name" className="block mb-2 text-lg text-gray-800">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block mb-2 text-lg text-gray-800">
          Address:
        </label>
        <input
          type="text"
          id="address"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-lg text-gray-800">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 text-lg text-white bg-indigo-500 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
