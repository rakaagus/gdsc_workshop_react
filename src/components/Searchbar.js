import { useState } from 'react';
import React from 'react';



const Searchbar = ({ handleChange }) => {
  return (
    <div className="w-full mb-8 mt-5">
      <form className="flex bg-white rounded-md overflow-hidden p-1 shadow-md focus-within:shadow-lg transition-shadow">
        <input
          type="text"
          placeholder="Search free game"
          className="bg-white w-full p-3 text-slate-800 outline-none "
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Searchbar;