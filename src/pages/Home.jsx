import React, { useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import ListNote from "../components/ListNote";

const defaultData = {
  id: 1,
  title: "Babel",
  body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
  archived: false,
  createdAt: "2022-04-14T04:27:34.572Z",
};

function Home() {
  const [data, setData] = useState([defaultData]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  const handleSave = () => {
    if (title && body) {
      const newData = {
        id: data.length + new Date(),
        title: title,
        body: body,
        archived: false,
        createdAt: new Date(),
      };
      setData([...data, newData]);
      setTitle("");
      setBody("");
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleDelete = (index) => {
    let dataTemp = [...data];
    dataTemp.splice(index, 1);
    setData(dataTemp);
  };

  const handleArchive = (id) => {
    let dataTemp = [...data];
    dataTemp.map((item) => {
      if (item.id === id) {
        item.archived = !item.archived;
      }
    });
    setData(dataTemp);
  };

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Form
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        error={error}
        save={handleSave}
      />
      <ListNote
        data={data}
        search={search}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
      />
      <ListNote
        data={data}
        search={search}
        handleDelete={handleDelete}
        handleArchive={handleArchive}
        isArchived
      />
    </>
  );
}

export default Home;
