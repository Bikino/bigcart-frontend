import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './helper/history';
import PrivateRoute from './hoc/PrivateRoute';

//import Login from './views/pages/login/Login'

import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));
// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));

const App = () => {
  return (
    <Router history={history}>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path="/login" exact component={Login} />          
          <PrivateRoute path="/" name="Home" component={TheLayout} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
