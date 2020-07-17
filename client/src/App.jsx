import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// Components
import Navbar from './components/layout/Navbar';
import Auth from './components/auth/index';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import PrivateRoute from './routes/PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Auth} />
              <PrivateRoute exact path="/home" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </>
      </Router>
    </Provider>
  )
}

export default App;
