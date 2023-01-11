import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Header() {
  const { pathname } = useLocation();
  const TABS = [
    {
      label: "Active",
      url: "/",
    },
    {
      label: "Archived",
      url: "/archived",
    },
  ];

  return (
    <header>
      <div className="flex py-4 gap-4">
        <h1 className="text-gray-500 text-4xl my-auto">Notes</h1>
      </div>
      <div className="flex justify-between border-b">
        <div className="flex gap-4">
          {TABS.map((item, index) => (
            <Link
              to={item.url}
              key={index}
              className={`${
                item.url === pathname
                  ? "font-bold border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link to="/add" className="text-blue-500">
          + Add Note
        </Link>
      </div>
    </header>
  );
}
