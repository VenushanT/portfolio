import '@splinetool/viewer';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
