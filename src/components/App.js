import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter basename="/react-routing">
    <div className="container">
      <Header />
      {/* wrapp our Routes in the Switch component */}
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about"render={ () => <About title="About"/> } />
        <Route path="/teachers" component={ Teachers } />
        <Route path="/courses" component={ Courses } />
        {/* ROUTE TO ERROR PAGE, we do not specify a path */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;