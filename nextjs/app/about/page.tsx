"use client"

import { useState } from "react";
import * as yup from "yup" // yup is validation library in js



const Page = () => {
  
  const [count, setCount] = useState(2);
  function handleClick() {
    setCount(count + 1);
  }

  const yupForm = yup.object().shape({
    name : yup.string().required().min(5).max(10)
  })

  const ValidationOfYup =  async () => {
    const result = await yupForm.validate({name:12345})
    console.log(result,'yup result')
  }
  // handleClick();

  return (
    <>
          <h1 
        className="text-4xl font-bold text-gray-800 dark:text-gray-200 cursor-pointer"
        onClick={() => alert("Hello from the About page!")}
        >
              About page
          </h1>

          <p> Count: {count} </p>
        
          <button onClick = {ValidationOfYup}>Yup Func</button>
         
    </>

  );
};

export default Page;