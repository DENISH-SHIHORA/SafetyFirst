import { Route, Router, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Guards from "./Pages/Guards";
import Services1 from "./Pages/Services1";
import About1 from "./Pages/About1";
import Contacts1 from "./Pages/Contacts1";
import BlogGrid1 from "./Pages/BlogGrid1";
import BlogDetails from "./Pages/BlogDetails1";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/services" element={<Services1 />} />
        <Route path="/guards" element={<Guards />} />
        <Route path="/contact" element={<Contacts1 />} />
        <Route path="/blog-grid" element={<BlogGrid1 />} />
        <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
