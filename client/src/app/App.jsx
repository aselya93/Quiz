import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/question", element: <QuestionPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
