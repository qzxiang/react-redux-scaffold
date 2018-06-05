import React, {Component} from 'react';
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../util/loading'


const Layout = Loadable({
  loader: () => import('../page/layout/index.js'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('../page/login/index.js'),
  loading: Loading,
});

const Error = Loadable({
  loader: () => import('../page/error/index.js'),
  loading: Loading,
});

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                  <Route path='/error' component={Error}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/" render={() => (
                    (true) ? (
                      <Layout/>
                    ) : (
                      <Redirect to="/login"/>
                    )
                  )}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes