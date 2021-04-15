import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'leaflet/dist/leaflet.css'
import 'semantic-ui-css/semantic.min.css'
/**
import {createStore} from 'redux'
import helpReducers from './reducers'
import {Provider} from 'react-redux';


const helpStore = createStore(
    helpReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
 */

ReactDOM.render(
    //<Provider store={helpStore}>
        <App />
    //</Provider>
    , document.getElementById('root'));