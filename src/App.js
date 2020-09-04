import React from 'react';
import './App.scss';
import Navbar from '../src/components/Navbar';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';
import AchievementSection from '../src/components/AchievementSection';
import Headline from '../src/components/Headline';
import IslandI from '../src/components/Island-1';
import IslandII from '../src/components/Island-2';
import IslandIII from '../src/components/Island-3';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AchievementSection/>
      <Headline/>
      <IslandI/>
      <IslandII/>
      <IslandIII/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
