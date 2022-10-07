import React, { useState, useEffect } from "react";
import Search from "./Search";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/contests?q=" + query)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [query]);
  function handleChange(event) {
    setQuery(event.target.value);
  }
  console.log(query);

  return (
    <>
      <div>
        {data.length === 0 ? (
          <h3>type in a value</h3>
        ) : (
          data.map((name, index) => {
            return (
              <div className="content" key={index}>
                <p>{name.name}</p>
                <p>{name.url}</p>
                <p>{name.start_time}</p>
                <p>{name.end_time}</p>
                <p>{name.duration}</p>
                <p>{name.site}</p>
                <p>{name.in_24_hours}</p>
                <p>{name.status}</p>
              </div>
            );
          })
        )}
      </div>

    </>
  );
};

export default Fetch;
