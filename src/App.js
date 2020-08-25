import React from 'react';
import './App.scss';
import Navbar from '../src/components/Navbar';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';
import AchievementSection from '../src/components/AchievementSection';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AchievementSection/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
