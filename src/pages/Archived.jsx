import React from "react";
import { Link } from "react-router-dom";
import {Header} from "../components/Header";
import { getArchivedNotes } from "../utils/local-data";

function Archived() {
  const data = getArchivedNotes();

  return (
    <div className="max-w-3xl mx-auto">
      <Header />
      <section className="max-w-5xl mt-8 mx-auto flex-wrap">
        {data.length === 0 && (
          <div className="text-center my-8">Tidak ada Catatan </div>
        )}
        {data.map((item, index) => (
          <Link to={`/${item.id}`} className="p-2 rounded my-8" key={index}>
            <h1 className="text-xl text-blue-500">{item.title}</h1>
            <div className="text-xs text-gray-600">
              {new Date(item.createdAt).toDateString()}
            </div>
            <div className="text-gray-500">{item.body}</div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Archived;
