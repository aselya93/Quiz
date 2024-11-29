import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizPage from "../pages/QuizPage/QuizPage"
import TopicPage from "../pages/TopicPage/TopicPage";
import Navigation from "../widgets/Navigation/Navigation";
import QuizTopicCard from "../widgets/QuizTopicCard/QuizTopicCard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      children: [
        { path: "/", element: <TopicPage /> },
        { path: "/quiz/:topicId", element: <QuizPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
