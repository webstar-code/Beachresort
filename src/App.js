import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import ErrorPage from './pages/Error';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
        <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route  path="/rooms/:slug" component={SingleRoom} />
        <Route  component={ErrorPage} />
      </Switch>
    </div>
    );
}

export default App;
