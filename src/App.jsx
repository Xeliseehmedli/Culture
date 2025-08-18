// import { useState } from 'react'

import "./App.css";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Announcements from "./components/Announcements/Announcements";
import Service from "./components/Service/Service";
import Projects from "./components/Projects/Projects";
import Usefulinks from "./components/Usefulinks/Usefulinks";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <News />
      <Announcements />
      <Service />
      <Projects />
      <Usefulinks />
      <Footer />
    </>
  );
}

export default App;
