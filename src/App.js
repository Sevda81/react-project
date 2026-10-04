import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Course from "./pages/course/Course";
import Article from "./pages/article/Article";
import routse from "./routes";
function App() {
  
    let router = useRoutes(routse)
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />

    //     <Route path="/article/*" element={<Article />} >
    //       <Route path="php" element={<h2>php article</h2>} />
    //       <Route path="js" element={<h2>javascript article</h2>} />
    //       <Route path="react" element={<h2>react article</h2>} />
    //     </Route>

    //     <Route path="/login" element={<Login />} />
    //     <Route path="/panel" element={<Panel />} />
    //     <Route path="/course/:courseId" element={<Course />} />
    //   </Routes>
    // </BrowserRouter>
    return router
}
export default App;
