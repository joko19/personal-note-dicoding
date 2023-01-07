import React from "react";

function Header({ search, setSearch }) {
  return (
    <header className="flex justify-between items-center bg-gray-500 p-4">
      <h1 className="text-white text-4xl w-full">Personal Notes</h1>
      <input
        type="text"
        placeholder="Cari..."
        className="border p-2 mx-auto rounded focus:outline-none mb-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </header>
  );
}

export default Header;
