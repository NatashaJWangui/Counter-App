'use client';
import React, { useState, useEffect } from 'react'

function DebouncedSearch({history}) {
    // search term holds current input from the search field 
  const [searchTerm, setSearchTerm] = useState("");
//   filtered list of the counter values from the search term
  const [filteredHistory, setFilteredHistory] = useState(history);

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredHistory(
        history.filter((value) => value.toString().includes(searchTerm))
        // Once history filtered checks if the value includes the search term
      );
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, history]);

  return (
    <div className="mt-4 flex justify-center">
      <input
        type="text"
        placeholder="Search value history..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded-lg border-black"
      />
      <ul className="mt-2">
        {filteredHistory.map((item, index) => (
          <li key={index} className="border-2 py-1 rounded-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

 

export default DebouncedSearch