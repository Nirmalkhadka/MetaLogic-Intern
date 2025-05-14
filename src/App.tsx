import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar';
import LandingSection from './Components/LandingSection';
import DevelopmentProcess from './Components/Development';
import Tech from './Components/Tech';
import Project from './Components/Project';
import Question from './Components/Question';
import Footer from './Components/Footer';
// import { DarkModeProvider } from './Components/Dark';


const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* <DarkModeProvider/> */}
      <LandingSection/>
      <DevelopmentProcess/>
      <Project/>
      <Tech/>
      <Question/>
      <Footer/>
    </div>
  );
};

export default App;
