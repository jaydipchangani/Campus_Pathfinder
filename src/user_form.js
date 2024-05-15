import React, { useState } from "react";
import Header from "./header";
import { Link } from "react-router-dom";

const InputField = ({ label, type, name, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <input
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

const CampusVisitForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
<>  <Header/>
    <div className="p-5">
    
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl text-center font-semibold mb-8">
          Campus Visit Form
        </h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Email ID"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Mobile Number"
            type="tel"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <InputField
            label="Reason to Visit"
            type="text"
            name="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          <Link to="./admin">Admin Side here</Link><button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  
  );
};

export default CampusVisitForm;
