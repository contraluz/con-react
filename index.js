import React  from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import finalCreateStore from './store/index';
import reducer from './reducers/index'
import { Router,Route,hashHistory,IndexRoute } from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux'; // sync History with store

import DevTools from './store/DevTools';

import News from './modules/News'
import App from './modules/App'
import About from './modules/About'
import Home from './modules/Home'
import CounterContext from './modules/Counter'
import CartsContext from './modules/Carts'

const store = finalCreateStore(reducer);
const history = syncHistoryWithStore(hashHistory,store); 



ReactDOM.render(
   
        <Provider store={store}>
             <div>
                <Router history={history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/counter" component={CounterContext}/>
                        <Route path="/carts" component={CartsContext}/>
                        <Route path="/news" component={News}/>
                        
                    </Route>
                </Router>
                {/* <DevTools/> */}
            </div>
        </Provider>
    ,
    document.getElementById('app')
)