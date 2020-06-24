import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';

// App css
//import 'style!css!applicationStyles';

import './styles/app.css'

ReactDOM.render(
    <Main />, 
    document.getElementById("react-container")
);