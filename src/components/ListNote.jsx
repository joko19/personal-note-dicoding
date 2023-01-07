import React from "react";

function ListNote({
  data,
  isArchived = false,
  search,
  handleDelete,
  handleArchive,
}) {
  console.log(isArchived);
  return (
    <section className="max-w-5xl mt-8 mx-auto flex-wrap">
      <h1 className="text-3xl font-bold text-gray-600">
        Catatan {isArchived ? "yang diarsipkan" : "Aktif"}
      </h1>
      {data.filter(
        (e) =>
          e.archived === isArchived &&
          e.title.toLowerCase().includes(search.toLowerCase())
      ).length === 0 && (
        <div className="text-center my-8">Tidak ada Catatan </div>
      )}
      {data
        .filter(
          (e) =>
            e.archived === isArchived &&
            e.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((item, index) => (
          <div
            className="border p-2 rounded bg-gray-50 drop-shadow-md my-2"
            key={index}
          >
            <h1>{item.title}</h1>
            <div className="text-sm text-gray-600">
              {new Date(item.createdAt).toDateString()}
            </div>
            <div className="text-gray-500">{item.body}</div>
            <div className="flex gap-2 mt-2">
              <button
                className="bg-red-500 hover:bg-red-700 p-1 text-white rounded"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button
                className="bg-green-600 hover:bg-green-800 text-white p-1 rounded"
                onClick={() => handleArchive(item.id)}
              >
                Arsipkan
              </button>
            </div>
          </div>
        ))}
    </section>
  );
}

export default ListNote;
