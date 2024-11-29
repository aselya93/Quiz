import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizPage from "../pages/QuizPage/QuizPage"
import MainPage from "../pages/MainPage/MainPage";
import Navigation from "../widgets/Navigation/Navigation";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/quiz", element: <QuizPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
