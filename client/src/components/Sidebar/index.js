import React from "react";
import Logo from "../../assets/logo192.png";
import {
  BiHomeAlt,
  BiJoystick,
  BiSortUp,
  BiLayer,
  BiUser,
} from "react-icons/bi";
import { RiSettings5Line } from "react-icons/ri";

export default function Sidebar() {
  const menu = [
    { name: "Home", icon: <BiHomeAlt /> },
    { name: "Players", icon: <BiUser /> },
    { name: "Highscore", icon: <BiSortUp /> },
    { name: "Category", icon: <BiLayer /> },
    { name: "Room", icon: <BiJoystick /> },
    { name: "Setting", icon: <RiSettings5Line /> },
  ];
  return (
    <div className="border-r border-gray-200 w-64 px-9 space-y-20">
      <div className="flex flex-row items-center pt-8">
        <img src={Logo} alt="logo" className="w-7 h-7" />
        <div className="pl-2">Binar Academy</div>
      </div>
      <div>
        <div className="mb-4">Menu</div>
        <ul className="space-y-7">
          {menu.map((val, index) => {
            return (
              <li
                key={index}
                className="flex flex-row items-center text-gray-400"
              >
                <div className="mr-5">{val.icon}</div>
                <div>{val.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
