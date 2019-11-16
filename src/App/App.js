import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Aside from '../Aside/Aside';
import Posts from '../Posts/Posts';
import Main from './Main/Main';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="Container">
        <Aside />
        <Main title="helloo"> 
          <Posts />          
        </Main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
