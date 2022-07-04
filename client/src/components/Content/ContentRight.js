import React from "react";
import { BiUser } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import Logo from "../../assets/logo192.png";
import TransactionList from "./TransactionList";

export default function ContentRight() {
  return (
    <section className="w-96 bg-gray-100 overflow-hidden px-8">
      <div className="pt-12 flex justify-end space-x-9 items-center">
        <GrNotification size={20} />
        <BiUser size={20} />
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="user"
          className="h-9 w-9 object-cover rounded-full"
        />
      </div>
      <div className="card mt-9">
        <div className="relative p-5 text-white">
          <div className="text-lg">Bayu Luky Istanto</div>
          <div className="mt-10 space-y-2">
            <div>Student Binar Academy</div>
            <div>Challenge Chapter 8</div>
            <div className="flex justify-between relative">
              <span>React JS</span>
              <img src={Logo} alt="visa" className="h-8" />
            </div>
          </div>
        </div>
      </div>
      <TransactionList />
    </section>
  );
}
