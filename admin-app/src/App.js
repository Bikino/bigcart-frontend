import React, { Component } from 'react';
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
// const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/login" exact component={Login} />
            {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} /> */}
            <PrivateRoute path="/" name="Home" component={TheLayout} />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
