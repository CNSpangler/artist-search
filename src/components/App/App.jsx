import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../../containers/Home.jsx';
import Artist from '../Artist/Artist.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:artistId" component={Artist} />
      </Switch>
    </Router>
  );
}
