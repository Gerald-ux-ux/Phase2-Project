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

