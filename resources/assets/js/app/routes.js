import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';

import App from './App';

import Home from '../features/Home';
import Auth from '../features/user/auth/Auth';
import Register from '../features/user/register/Register';

export default (store) => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home} />

            <Route path="auth" component={Auth} />
            <Route path="register" component={Register} />
        </Route>
    );
};