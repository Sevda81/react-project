import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/about/About";
import AddArticle from "./pages/article/addArticle/AddArticle";
import Article from "./pages/article/Article";
import ArticleItemes from "./pages/article/articleIteme/ArticleIteme";
import EditArticle from "./pages/article/editArticle/EditArticle";
import Course from "./pages/course/Course";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Setting from "./pages/Setting";


const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/add-article", element: <AddArticle /> },
  {
    path: "/article/", element: <Article />
    // children: [
    //   { path: "php", element: <h2>php article</h2> },
    //   { path: "js", element: <h2>javascript article</h2> },
    //   { path: "react", element: <h2>react article</h2> },
    // ],
  },
  { path: "/article/:articleId", element: <ArticleItemes /> },
  { path: "/edit-article/:articleId", element: <EditArticle /> },
  { path: "/login", element: <Login /> },
  { path: "/panel", element: <PrivateRoute > <Panel /> </PrivateRoute> },
  { path: "/setting", element: <PrivateRoute> <Setting /> </PrivateRoute> },
  { path: "/course/:courseId", element: <Course /> },
];

export default routes