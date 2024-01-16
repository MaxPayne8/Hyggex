import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Faq = () => {
  return (
    <div className="px-16 m-6 mt-12 ">
      <h1 className="font-bold text-blue-950 text-2xl text-left">FAQ</h1>
      <ul>
        <li className="flex justify-between  w-[60%] border-2 border-blue-700 p-1 px-2 items-center rounded-lg my-4 font-semibold">
          <h1> Can education flashcards be used for all age groups?</h1>
          <FaAngleDown />
        </li>
        <li className="flex justify-between  w-[60%] border-2 border-blue-700 p-1 px-2 items-center rounded-lg my-4 font-semibold">
          <h1> How do education flashcards work?</h1>
          <FaAngleDown />
        </li>
        <li className="flex justify-between  w-[60%] border-2 border-blue-700 p-1  px-2 items-center rounded-lg my-4 font-semibold">
          <h1> Can education flashcards be used for test preparation?</h1>
          <FaAngleDown />
        </li>
      </ul>
    </div>
  );
};

export default Faq;
