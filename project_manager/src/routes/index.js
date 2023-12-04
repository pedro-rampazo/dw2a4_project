import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import NewProject from "../pages/NewProject";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

import Container from "../layout/Container";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Projects from "../pages/Projects";
import Company from "../pages/Company";
import Contact from "../pages/Contact";
import Project from "../pages/Project";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={
          <>
            <Navbar />
            <Container>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/company" element={<Company />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/newproject" element={<NewProject />} />
                <Route path="/project/:id" element={<Project />} />
              </Routes>
            </Container>
            <Footer />
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
