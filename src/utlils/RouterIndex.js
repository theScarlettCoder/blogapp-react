import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import CreatePost from "../pages/CreatePost";
import SinglePost from "../pages/SinglePost";

const RouterIndex = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/posts/:id`} element={<SinglePost />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default RouterIndex;
