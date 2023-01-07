import React from "react";

export const Error = ({ type }) => {
  return <span className="text-xs text-red-500">{type} harus diisi</span>;
};
