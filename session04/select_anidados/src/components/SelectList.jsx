import React from 'react';

export const SelectList = ({ title, options, onChange, value }) => {
  const key = `select-${title}`;
  const label = title.toUpperCase();

  return (
    <>
      <label className="label-select" htmlFor={key}>
        {label}
      </label>
      <select
        className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default btn-popover focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby={key}
        name={key}
        id={key}
        onChange={onChange}
        value={value}
      >
        <option
          className="absolute z-10 hidden w-full py-1 mt-1 overflow-auto text-base transition duration-100 ease-in bg-white border border-gray-300 rounded-md shadow-lg popover-list max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          value=""
        >
          Seleccione un {title}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
