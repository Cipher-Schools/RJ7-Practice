import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

function FetchData() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  const data = useFetch("https://jsonplaceholder.typicode.com/todos");
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1>Fetch ToDo Data</h1>
      <hr />
      {data?.map((item) => (
        <div>
          <span>{item.title}: </span>
          <span>{item.completed ? "Completed" : "InComplete"}</span>
        </div>
      ))}
      <hr />
      {posts?.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}

export default FetchData;
