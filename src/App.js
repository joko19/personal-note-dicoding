import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddNote from "./pages/AddNote";
import Archived from "./pages/Archived";
import DetailNote from "./pages/DetailNote";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { getUserLogged } from "./utils/network-data";

function PrivateRoute({ children }) {
  const [isAuth, setIsAuth] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserLogged().then((res) => {
      if (res.data) {
        setIsAuth(true);
        setIsLoading(false);
      } else {
        setIsAuth(false);
        setIsLoading(false);
      }
    });
  });

  if (isLoading) {
    return <div className="text-center p-40">Loading...</div>;
  } else {
    return isAuth ? children : <Navigate to="/login" />;
  }
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/:id"
          element={
            <PrivateRoute>
              <DetailNote />
            </PrivateRoute>
          }
        />
        <Route
          path="/archived"
          element={
            <PrivateRoute>
              <Archived />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddNote />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
