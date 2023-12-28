'use client'
import React, { useState, useRef, useEffect } from 'react';

function DropDown({Data, Title}) {
  const [selectedData, setSelectedData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };    

  const selectData = (items) => {
    setSelectedData(items);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <div>
          <button
            type="button"
            className=" w-16  text-sm md:text-lg px-1 flex items-center justify-between"
            onClick={toggleDropdown}
          >
            {selectedData ? (
              <span className='text-black'>{selectedData}</span>
            ) : (
              <span className="text-black w-full">{Title}</span>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-32 h-40 overflow-y-auto rounded-md shadow-md shadow-gray-700 bg-white text-black ">
            <div className="py-1">
              {Data.map((items) => (
                <button
                  key={items}
                  onClick={() => selectData(items)}
                  className="block w-full text-start px-4 py-2 text-sm text-black hover:text-white hover:bg-gray-800"
                >
                  {items}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
  );
}

export default DropDown;