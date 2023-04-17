import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ListUser from "./components/ListUser";
import DetailUser from "./components/DetailUser";
import PrivateRoutes from "./components/PrivateRoutes";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />} >
          <Route path="/listuser" element={<ListUser />} />
          <Route path="/listuser/:userId" element={<DetailUser />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listuser" element={<ListUser />} />
        <Route path="/listuser/:userId" element={<DetailUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
