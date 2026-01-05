import { createBrowserRouter } from "react-router";
import App from "./App";
import ProjectDetails from "./Pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project-details/:id",
    element:<ProjectDetails/>
  }
]);

export default router;
