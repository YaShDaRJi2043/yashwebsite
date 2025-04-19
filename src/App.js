import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Page from "./Page";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Page title="YASH | Home">
              <Home />
            </Page>
          }
        />
        <Route
          path="/about"
          element={
            <Page title="YASH | About Us">
              <About />
            </Page>
          }
        />
        <Route
          path="/project"
          element={
            <Page title="YASH | Projects">
              <Project />
            </Page>
          }
        />
        <Route
          path="/contact"
          element={
            <Page title="YASH | Contact">
              <Contact />
            </Page>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
