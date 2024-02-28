import React from 'react';
import './CSS/style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Addblog from './pages/addblog';
import Moredetails from './pages/Moredetails';
function App(props) {
  return (
    <Router>
      <div className='app'>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/newblog'>
            <Addblog/>
          </Route>
          <Route path='/moredetails/:id'>
            <Moredetails/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
