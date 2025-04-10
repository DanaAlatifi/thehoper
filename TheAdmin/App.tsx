import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLogin from "./AdminLogin"; // تأكد من مسار الملفات لديك
import AdminDashboard from "./AdminDashboard";
import AddUser from "./AddUser";

const router = createBrowserRouter([
  { path: "/", element: <AdminLogin /> },
  { path: "/adminDashboard", element: <AdminDashboard /> },
  { path: "/addUser", element: <AddUser /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
