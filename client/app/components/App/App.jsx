import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ReactGA from 'react-ga';

import Homepage from '../Home/Homepage';
import Preloader from '../Preloader/Preloader';

const LandingPageKids = React.lazy(() => import('../LP/Kids/LandingPageKids'));
const LandingPage = React.lazy(() => import('../LP/Adults/LandingPage'));
const NotFound = React.lazy(() => import('./NotFound'));
const Post = React.lazy(() => import('../Post/Post'));
const Console = React.lazy(() => import('../Console/Console'));
const PostConsole = React.lazy(() => import('../PostConsole/PostConsole'));
const Login = React.lazy(() => import('../Login/Login'));
const Search = React.lazy(() => import('../Search/Search'));

// import Register from '../Login/Register';

ReactGA.initialize('UA-128629356-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const waitingComponent = Component => props => (
  <Suspense fallback={<Preloader />}>
    <Component {...props} />
  </Suspense>
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/landing" component={waitingComponent(LandingPage)} />
      <Route path="/school" component={waitingComponent(LandingPageKids)} />
      <Route path="/blog/:postUrl" component={waitingComponent(Post)} />
      <Route path="/console" component={waitingComponent(Console)} />
      <Route path="/postConsole/:id" component={waitingComponent(PostConsole)} />
      <Route path="/login" component={waitingComponent(Login)} />
      <Route path="/search" component={waitingComponent(Search)} />
      {/* <Route path={"/register"} component={Register}/> */}
      <Route component={waitingComponent(NotFound)} />
    </Switch>
  </Router>
);

export default App;
