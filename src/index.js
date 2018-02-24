import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './bootstrap/css/bootstrap.css';
import App from './js/App';
import Game from './js/Game';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import {
    setUserName
} from './js/actions/userActions'

console.log(store.getState())
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/play" component={Game}/>
            </div>
        </BrowserRouter>
    </Provider>,
 
    document.getElementById('root'));
registerServiceWorker();    
