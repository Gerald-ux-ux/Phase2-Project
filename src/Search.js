import React, { useState } from "react";
// import Fetch from './Fetch'

function Search({ handleChange }) {
  // const[query, setQuery] = useState ([])
  // const contest = (data) =>{
  //   return contest.filter((index => index.toLowerCase() .includes(query)))
  // }
  return (
    <div
      className="px-3 py-2 font-semibold placeholder-gray-500
           text-black rounded-2xl border-none ring-2 ring-gray-300
           focuse:ring-gray-500 focus:ring-3"
    >
      <input
        type="text"
        placeholder="Search for a contest..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
