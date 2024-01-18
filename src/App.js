import React from "react";
import "./App.css";

import { Footer, Blog, Contact, Features, About, Header} from './containers';
import {  Brain, Ctaa, Navbar} from './components';

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <About />
      <Brain />
      <Features />
      {/* <Contact /> */}
      {/* <Blog /> */}
      <Ctaa />
      <Footer />
    </div>
  )
};
export default App;
