import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="m-6 px-10 flex justify-between">
        <div className="flex">
          <img
            src="https://media.licdn.com/dms/image/D560BAQH4A7srdAYq6Q/company-logo_200_200/0/1694531781563?e=1713398400&v=beta&t=rCwHNBe4e2EICWywFDd55lJzkFtukBN1q_15Y_LCwTA"
            alt="logo"
            className="w-12 h-12"
          />
          <h1 className=" text-3xl text-blue-950 mx-2">
            Hygge
            <span className="font-extrabold text-3xl text-blue-950">X</span>
          </h1>
        </div>
        <div>
          <ul className="flex text-slate-500">
            <li className="p-2 m-2 hover:text-white hover:bg-gradient-to-b from-blue-950 via-blue-900 to to-blue-800 hover:cursor-pointer duration-200 ease-in-out rounded-3xl">
              Home
            </li>
            <li className="p-2 m-2 hover:text-white hover:bg-gradient-to-b from-blue-950 via-blue-900 to to-blue-800 hover:cursor-pointer duration-200 ease-in-out rounded-3xl">
              Flashcard
            </li>
            <li className="p-2 m-2 hover:text-white hover:bg-gradient-to-b from-blue-950 via-blue-900 to to-blue-800 hover:cursor-pointer duration-200 ease-in-out rounded-3xl">
              Contact
            </li>
            <li className="p-2 m-2 hover:text-white hover:bg-gradient-to-b from-blue-950 via-blue-900 to to-blue-800 hover:cursor-pointer duration-200 ease-in-out rounded-3xl">
              FAQ
            </li>
            <li className="p-2 m-2 hover:text-white hover:bg-gradient-to-b from-blue-950 via-blue-900 to to-blue-800 hover:cursor-pointer duration-200 ease-in-out rounded-3xl">
              Login
            </li>
          </ul>
        </div>
      </div>
      <div className="flex text-slate-500 items-center px-10 m-6">
        <MdHomeFilled size={25} />
        <FaAngleRight />
        <h3>Flashcard</h3>
        <FaAngleRight />
        <h3>Mathematics</h3>
        <FaAngleRight />
        <h3 className="font-bold text-slate-700">Relation and Function</h3>
      </div>
    </div>
  );
};

export default Header;
