import React from "react";
import { images } from "../constants";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const navItemsInfo = [
  {
    name: "Home",
    type: "link",
  },
  {
    name: "Recommend",
    type: "dropdown",
    items: ["Action", "Drama", "Adventure", "Drama", "Slice Of Life", "Sport"],
  },
  {
    name: "About Us",
    type: "link",
  },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownHandler = () => {
    setDropdown((curstate) => {
      return !curstate;
    });
  };
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2 ">
            {item.name}
          </a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:opacity-100 group-hover:right-[90%]">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={dropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-200 my-2 lg:absolute lg:bottom-0 bg-white rounded-xl lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent flex flex-col shadow-xl rounded-xl overflow-hidden text-center">
              {item.items.map((page) => (
                <a
                  href="/"
                  className=" hover:bg-gray-300  px-4 py-3 text-black lg:text-black"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setnavIsvisible] = useState(false);
  const navVisiblityHandler = () => {
    setnavIsvisible((curstate) => {
      return !curstate;
    });
  };
  return (
    <section className="left-0 top-0 right-0 z-50">
      <header className="container mx-auto px-5 flex justify-between items-center ">
        <div>
          <img className="w-32 h-32" src={images.Logo} alt="logo" />
        </div>
        <div className="lg:hidden z-50 text-white">
          {navIsVisible ? (
            <IoClose onClick={navVisiblityHandler} className="w-6 h-6" />
          ) : (
            <GiHamburgerMenu
              onClick={navVisiblityHandler}
              className="w-6 h-6"
            />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-200 ease-in bg-dark-hard text-white lg:text-white mt-[128px] lg:mt-0 lg:bg-transparent z-49 flex flex-col w-full gap-y-4 lg:gap-y-0 lg:w-auto justify-center lg:justify-end fixed top-0 bottom-0  lg:static lg:flex-row gap-x-9 items-center`}
        >
          <ul className="flex items-center flex-col gap-y-4 lg:gap-y-0 lg:flex-row gap-x-2">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item}></NavItem>
            ))}
          </ul>
          <button
            className="bg-none border-2 px-6 py-2 rounded-full font-semibold border-red-500 
          transition-all duration-200 ease-in hover:text-white hover:bg-red-500 hover:border-none"
          >
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
