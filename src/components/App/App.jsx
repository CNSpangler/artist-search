import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../../containers/Home/Home.jsx';
import Artist from '../../containers/Artist/Artist.jsx';
import Release from '../../containers/Release/Release.jsx';
import Song from '../../containers/Song/Song.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:artistName/:artistId" component={Artist} />
        <Route exact path="/releases/:artistName/:releaseId" component={Release} />
        <Route exact path="/tracks/:songTitle/:artistName/:songId/" component={Song} />
      </Switch>
    </Router>
  );
}
