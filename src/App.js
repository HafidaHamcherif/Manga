import React from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
import Home from './Home';
import Manga from './Manga';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/manga/1">Manga</Link>
      <Link to="/manga/2">Manga</Link>
      <Link to="/manga/3">Manga</Link>        
      <div>
        <Route path="/" exact component={Home}/>
        <Route path="/manga/:id" component={Manga}/>
      </div>
    </Router>
  )
}

export default App;
