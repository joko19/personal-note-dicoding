import React from "react";
import { Error } from "./Error";

function Form({ title, setTitle, body, setBody, error, save }) {
  return (
    <section className="flex flex-col gap-2 max-w-3xl mx-auto mt-4">
      {error && !title && <Error type="Judul" />}
      <input
        type="text"
        placeholder="Tulis Judul"
        className="border p-2 rounded focus:outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={50}
      />
      <span className="text-xs text-right text-gray-500  mb-2">
        Sisa Karakter:{50 - title.length}{" "}
      </span>
      {error && !body && <Error type="Body" />}
      <textarea
        rows={10}
        placeholder="Tulis Deskripsi"
        className="border p-2 rounded focus:outline-none"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="flex flex-row-reverse">
        <button
          onClick={save}
          className="bg-blue-400 text-white  p-2 rounded w-fit"
        >
          Save
        </button>
      </div>
    </section>
  );
}

export default Form;
