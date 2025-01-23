import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Determine visibility based on the route
  useEffect(() => {
    // Correct the route name if it's "collection" instead of "colletion"
    if (location.pathname.includes('collection')) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [location]);

  // Render only if `showSearch` and `isVisible` are both true
  return showSearch && isVisible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm py-2"
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="Search Icon" />
      </div>
      <img
        onClick={() => setShowSearch(false)} // Close the search bar
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt="Close Icon"
      />
    </div>
  ) : null;
}

export default SearchBar;
