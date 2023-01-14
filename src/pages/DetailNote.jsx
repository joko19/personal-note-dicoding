import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";

function DetailNote() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    getNote(id).then((res) => setData(res.data));
  }, []);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteNote(id);
    navigate("/");
  };

  const handleArchive = () => {
    if (data.archived) {
      unarchiveNote(id);
      navigate("/");
    } else {
      archiveNote(id);
      navigate("/archived");
    }
  };

  if (!data) {
    return (
      <div className="dark:bg-gray-700 dark:text-white min-h-screen">
        <div className="py-12 text-center">
          <h1 className=" text-4xl font-bold">Catatan Tidak ditemukan</h1>
          <Link to="/"> Kembali ke Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dark:bg-gray-700 dark:text-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="py-4 text-4xl font-medium border-b">{data.title}</h1>
        <span className="py-2 text-gray-500 dark:text-gray-300">
          {new Date(data.createdAt).toDateString()}
        </span>
        <p className="py-2 text-lg">{data.body}</p>
        <div className="flex gap-2 mt-2">
          <button
            className="bg-red-500 hover:bg-red-700 p-1 text-white rounded"
            onClick={() => handleDelete(id)}
          >
            Hapus
          </button>
          <button
            className="bg-green-600 hover:bg-green-800 text-white p-1 rounded"
            onClick={() => handleArchive()}
          >
            {data.archived ? "Aktifkan" : "Arsipkan"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailNote;
