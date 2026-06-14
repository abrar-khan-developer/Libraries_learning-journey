"use client"

import { useState } from "react";

const Page = () => {
  
  const [count, setCount] = useState(2);
  function handleClick() {
    setCount(count + 1);
  }

  handleClick();

  return (
    <>
          <h1 
        className="text-4xl font-bold text-gray-800 dark:text-gray-200 cursor-pointer"
        onClick={() => alert("Hello from the About page!")}
        >
              About page
          </h1>

          <p> Count: {count} </p>
    </>

  );
};

export default Page;