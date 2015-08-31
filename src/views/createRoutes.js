import React from 'react';
import {Route} from 'react-router';
import App from 'views/App';
import Home from 'views/Home';
import Slack from 'views/Slack';
import MongoTest from 'views/MongoTest';
import NotFound from 'views/NotFound';

export default function(store) {
  return (
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="/slack" component={Slack}/>
      <Route path="/mongo" component={MongoTest}/>
      <Route path="*" component={NotFound}/>
    </Route>
  );
}
