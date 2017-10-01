import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import Store from './app/store';
import routes from './app/routes';

ReactDOM.render(
    (
        <Provider store={ Store }>
            <Router history={ browserHistory }>
                { routes(Store) }
            </Router>
        </Provider>
    ),
    document.getElementById('app')
);