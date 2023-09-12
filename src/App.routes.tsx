import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function AppRoutes() {
  // const privateRoutes = [
  //   {
  //     path: "/profile",
  //     // element: <Sidebar />,
  //   },
  // ];
  const publicRoutes = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
        {/* {privateRoutes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={<PrivateRoute>{route.element}</PrivateRoute>}
          />
        ))} */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
