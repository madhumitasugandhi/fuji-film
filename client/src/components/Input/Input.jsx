import React from 'react';

function Input({ value, setValue, label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-1 font-semibold text-sm">
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-gray-900 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FF0033]"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
