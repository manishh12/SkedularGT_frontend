import React, { useState } from "react";

const SignupModal = ({ isOpen, onClose, onSubmit }) => {
  const [username, setUsername] = useState("");
  const [PIN, setPIN] = useState("");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({ username, PIN, email, balance: parseFloat(balance) });
      setUsername("");
      setPIN("");
      setEmail("");
      setBalance("");
      onClose(); 
    } catch (error) {
      console.log(`Signup failed. ${error.message}`); 
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded shadow-md z-60">
          <h2 className="text-lg font-bold mb-4">New Customer Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">PIN</label>
              <input
                type="text"
                value={PIN}
                onChange={(e) => setPIN(e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Balance</label>
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default SignupModal;

