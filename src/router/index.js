import React, {Component} from 'react';
import {Route, BrowserRouter, Link, Redirect, Switch} from 'react-router-dom';
import {view as Layout} from '../page/layout/index.js';
import LoginForm from '../page/login';

const page404 = ()=>(
    <div>404</div>
);
// const login=()=>(
//     <h1>登录页</h1>
// );

const login =()=>(
    <LoginForm />
)

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login"  component={login}/>
                    <Route path='/404' component={page404}/>
                    <Route path="/" component={Layout}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes