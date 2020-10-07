import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './main.scss';

var installation = document.getElementById('installation--page').innerHTML,
    arrInstallation = eval('({obj:[' + installation + ']})');

ReactDOM.render(
    <Router>
        <App installation={arrInstallation.obj[0].install}/>
    </Router>,
    document.getElementById('root')
);
