import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../../containers/Home/Home.jsx';
import Artist from '../../containers/Artist/Artist.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artists/:artistId" component={Artist} />
      </Switch>
    </Router>
  );
}
