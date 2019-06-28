import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from '../src/Store/store';
import { Provider } from 'react-redux';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

const apiUrl = 'https://www.reddit.com/';

export const getImage = sub => {
    axios.get(apiUrl + sub + '/about.json')
        .then(res => {
            console.log(res.data.data.icon_img)
        })
        .catch(error => {
            console.log(error)
        })
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
