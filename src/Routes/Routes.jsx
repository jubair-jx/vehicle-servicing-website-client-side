import Layout from "../components/Layout/Layout";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [],
  },
]);

export default router;
