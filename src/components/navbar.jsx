import React from 'react';
import { useState } from 'react';

const Navbar = ({ onSearch, cityData }) => {
  const [search, setSearch] = useState('');

  return (
    <nav className=" h-20  px-5 background2  flex justify-between items-center text-lg text-white">
      <div className="flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <p>
          {cityData?.[0]?.address?.city && cityData?.[0]?.address?.state
            ? `${cityData[0].address.city}, ${cityData[0].address.state}`
            : ''}
        </p>
        <p></p>
      </div>

      <div class="flex gap-2">
        <input
          placeholder="Search city"
          class="w-80 h-8 rounded-2xl px-4 py-2 box-shadow text-black"
          type="text"
          value={search}
          onChange={(ev) => {
            setSearch(ev.target.value);
          }}
        />
        <button
          className="flex rounded-2xl gap-2 background3 py-1 px-4"
          onClick={() => {
            onSearch(search);
          }}
        >
          <span class="label">Search</span>
          <span class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="flex gap-2 items-center text-center mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <div>Account</div>
      </div>
    </nav>
  );
};

export default Navbar;
