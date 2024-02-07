import {
    createBrowserRouter,
  } from "react-router-dom";
import UserPage from "./pages/user/UserPage";
import IngredientPage from "./pages/ingredient/IngredientPage";

const RouterWrapper = createBrowserRouter( [
      {
        path: "/",
        element: <UserPage />,
      },
      {
        path: "/ingredient",
        element: <IngredientPage />,
      },
    ]
);

export default RouterWrapper;