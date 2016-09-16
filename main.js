import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Router,Route,Link,IndexRoute,hashHistory,browserHistory,Redirect,NotFoundRoute} from 'react-router';
import Home from './spa_application/component/home.jsx';
import About from './spa_application/component/about.jsx';
import Grid from './spa_application/component/grid.jsx';

ReactDOM.render(
    <Router  componenet={App}   history = {hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>

            <Redirect to="IndexRoute" />
            <Route path="home" component={Home} ></Route>
            <Route path="grid" component={Grid} ></Route>
            <Route path="about" component={About}></Route>
            

        </Route>

    </Router>, document.getElementById('app'));



