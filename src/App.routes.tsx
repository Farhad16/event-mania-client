import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";
import Register from "./components/register";

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
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
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
