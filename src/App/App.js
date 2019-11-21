import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Aside from '../Aside/Aside';
import Posts from '../Publications/Posts/Posts';
import CreatePost from '../Publications/CreatePost/CreatePost';
import Detail from '../Publications/Detail/Detail';
import Login from '../Login/Login';
import Register from '../Register/Register'; 
import NotFound from '../NotFound/NotFound';

import Main from './Main/Main';
import Loader from './Loader/Loader';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

const Profile = React.lazy(() => import('../Profile/Profile')); 

function render(title, Cmp) {
  return function ({ match }) {
    return <Main title={title}><Cmp match={match} /></Main>
  }
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Loader local={true} isLoading={false} />
        <Navigation />
        <div className="Container">
          <Aside />
          <React.Suspense fallback={Loader} isLoading={true}>
            <Switch>
              <Route path="/" exact><Redirect to="/posts" /></Route>
              <Route path="/posts" exact render={render('Posts', Posts)}/>
              <Route path="/post/:id" exact render={render('Posts', Detail)}/>
              <Route path="/create-post" render={render('Create post', CreatePost)}/>
              <Route path="/profile" render={render('Profile', Profile)}/>
              <Route path="/register" render={render('Register', Register)}/>
              <Route path="/login" render={render('Login', Login)} />
              <Route path="*" render={render('NotFound', NotFound)} />
            </Switch>
          </React.Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
