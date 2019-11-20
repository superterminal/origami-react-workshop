import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Aside from '../Aside/Aside';
import Posts from '../Posts/Posts';
import Main from './Main/Main';
import Loader from './Loader/Loader';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Loader local={true} isLoading={false} />
        <Navigation />
        <div className="Container">
          <Aside />
          <Main title="helloo"> 
            <Switch>
              <Route path="/" exact component={Posts} />
            </Switch>
          </Main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
