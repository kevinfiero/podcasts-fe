import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PodcastSearch from '../../containers/PodcastSearch';
import PodcastFavorites from '../../containers/PodcastFavorites';

export default function App() {
  return(
    <Router>
      <Switch>
        <Route path="/favorites" component = {PodcastFavorites} />
        <Route path = "/" component = {PodcastSearch} />
      </Switch>

      
    </Router>

  ) 
}
