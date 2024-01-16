import React from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { AiOutlineSound } from "react-icons/ai";
import { IoReload } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { SlFrame } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";

const Body = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-950 text-left m-6 px-10 mt-10">
        Relation and Functions ( Mathematics )
      </h1>
      <div className="flex justify-center">
        <ul className="flex text-slate-500 font-semibold">
          <div className="group">
            <li className="px-2 mx-2 hover:text-blue-950 hover:font-bold  hover:cursor-pointer duration-200 ease-in-out rounded-3xl">
              Study
            </li>
            <hr className="bg-blue-900 h-1 opacity-0 group-hover:opacity-100"></hr>
          </div>

          <div className="group">
            <li className="px-2 mx-2 hover:text-blue-950 hover:font-bold  hover:cursor-pointer duration-200 ease-in-out rounded-3xl">
              Quiz
            </li>
            <hr className="bg-blue-900 h-1 opacity-0 group-hover:opacity-100"></hr>
          </div>
          <div className="group">
            <li className="px-2 mx-2 hover:text-blue-950 hover:font-bold  hover:cursor-pointer duration-200 ease-in-out rounded-3xl">
              Test
            </li>
            <hr className="bg-blue-900 h-1 opacity-0 group-hover:opacity-100"></hr>
          </div>
          <div className="group">
            <li className="px-2 mx-2 hover:text-blue-950 hover:font-bold  hover:cursor-pointer duration-200 ease-in-out rounded-3xl">
              Game
            </li>
            <hr className="bg-blue-900 h-1 opacity-0 group-hover:opacity-100"></hr>
          </div>
          <div className="group">
            <li className="px-2 mx-2 hover:text-blue-950 hover:font-bold  hover:cursor-pointer duration-200 ease-in-out rounded-3xl">
              Others
            </li>
            <hr className="bg-blue-900 h-1 opacity-0 group-hover:opacity-100"></hr>
          </div>
        </ul>
      </div>
      <div className="w-[50%] rounded-3xl relative h-80 bg-gradient-to-l from-blue-950 text-slate-200 via-blue-800 to-blue-600 mx-auto mt-4">
        <h1 className="absolute text-white font-medium text-3xl left-0 right-0 bottom-36">
          9 + 6 + 7x - 2x - 3
        </h1>
        <MdLightbulbOutline size={30} className="absolute top-5 left-5" />
        <AiOutlineSound size={30} className="absolute top-5 right-5" />
      </div>
      <div className="flex  justify-between w-[50%] mx-auto items-center m-6 px-10 ">
        <IoReload size={25} className="text-blue-900" />
        <div className="flex items-center">
          <FaChevronLeft
            size={30}
            className="bg-gradient-to-b from-blue-950 to-blue-600 rounded-full p-1 text-white"
          />
          <h1 className="mx-10 text-lg">01/10</h1>
          <FaChevronRight
            size={30}
            className="bg-gradient-to-b from-blue-950 to-blue-600 rounded-full p-1 text-white"
          />
        </div>
        <SlFrame size={25} className="text-blue-900 font-semibold" />
      </div>
      <div className="flex justify-between px-10 mx-12">
        <div className="flex">
          <img
            src="https://media.licdn.com/dms/image/D560BAQH4A7srdAYq6Q/company-logo_200_200/0/1694531781563?e=1713398400&v=beta&t=rCwHNBe4e2EICWywFDd55lJzkFtukBN1q_15Y_LCwTA"
            alt="logo"
            className="w-12 h-12 rounded-full shadow-lg shadow-gray-800"
          />
          <div className="mx-2">
            <h1 className="text-xs text-left">Published by</h1>
            <h1 className="text-2xl text-blue-950">
              Hygge<span className="font-bold">X</span>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <FaPlus
            size={30}
            className="p-1 bg-blue-950 text-white rounded-full"
          />
          <h1 className="text-blue-900 mx-2 text-xl font-semibold">
            Create Flashcard
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Body;
