"use client"

const Page = () => {
  return (
    <h1 
        className="text-4xl font-bold text-gray-800 dark:text-gray-200 cursor-pointer"
        onClick={() => alert("Hello from the About page!")}
        >
      About page
    </h1>
  );
};

export default Page;