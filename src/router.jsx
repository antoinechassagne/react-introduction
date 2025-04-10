import { createBrowserRouter } from "react-router";

import Hello from "./pages/Hello";
import Goodbye from "./pages/Goodbye";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hello />,
  },
  {
    path: "goodbye",
    element: <Goodbye />,
  },
]);

export default router;
