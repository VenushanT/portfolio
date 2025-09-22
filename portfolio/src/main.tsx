// Dynamic import for Spline viewer to improve initial load time
import('@splinetool/viewer').then(() => {
  console.log('Spline viewer loaded');
}).catch(err => {
  console.warn('Spline viewer failed to load:', err);
});

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
