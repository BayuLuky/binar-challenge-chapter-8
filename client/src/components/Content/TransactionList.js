import React from "react";
import { IoMdCheckbox, IoIosClipboard, IoMdStar } from "react-icons/io";

export default function TransactionList() {
  const materi = [
    {
      name: "Swagger Api Docs",
      status: "success",
      time: "8 Hours",
    },
    {
      name: "Monolith Dashboard",
      status: "success",
      time: "4 Hours",
    },
    {
      name: "React JS SPA 1",
      status: "ongoing",
      time: "10 Hours",
    },
    {
      name: "React JS SPA 2",
      status: "pending",
      time: "8 Hours",
    },
  ];

  const bgColors = (status) => {
    switch (status) {
      case "success":
        return "bg-blue-500";
      case "ongoing":
        return "bg-teal-400";
      default:
        return "bg-red-500";
    }
  };

  const icons = (status) => {
    switch (status) {
      case "success":
        return <IoMdCheckbox color="white" />;
      case "ongoing":
        return <IoIosClipboard color="white" />;
      default:
        return <IoMdStar color="white" />;
    }
  };

  return (
    <section>
      <div className="mt-10">
        <h3>Theory</h3>
        <div>
          {materi.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-center border-b border-b-gray-200 py-3"
              >
                <div
                  className={`h-10 w-10 rounded-lg flex items-center justify-center mr-3 ${bgColors(
                    val.status
                  )}`}
                >
                  {icons(val.status)}
                </div>
                <div className="flex-1">
                  <div className="text-lg font-medium">{val.name}</div>
                  <div className="text-sm">{val.status}</div>
                </div>
                <div className="text-red-600 text-sm">{val.time}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
