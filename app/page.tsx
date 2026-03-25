"use client";

import React from "react";

const Page = () => {
  const handleClick = async () => {
    try {
      const res = await fetch("/api/test");
      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.error("❌ Error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Page;