import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { getArchivedNotes } from "../utils/network-data";

function Archived() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getArchivedNotes().then((res) => setData(res.data));
  }, []);

  return (
    <div className="dark:bg-gray-700 dark:text-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Header />
        <section className="max-w-5xl mt-8 mx-auto flex-wrap">
          {data.length === 0 && (
            <div className="text-center my-8">Tidak ada Catatan </div>
          )}
          {data.map((item, index) => (
            <Link to={`/${item.id}`} className="p-2 rounded my-8" key={index}>
              <h1 className="text-xl text-blue-500 dark:text-blue-400">
                {item.title}
              </h1>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {new Date(item.createdAt).toDateString()}
              </div>
              <div className="text-gray-500 dark:text-gray-300">
                {item.body}
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Archived;
