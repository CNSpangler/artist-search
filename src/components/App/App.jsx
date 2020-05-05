import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../../containers/Home/Home.jsx';
import Artist from '../../containers/Artist/Artist.jsx';
import Release from '../Release/Release.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artists/:artistId" component={Artist} />
        <Route exact path="/releases/:releaseId" component={Release} />
      </Switch>
    </Router>
  );
}
