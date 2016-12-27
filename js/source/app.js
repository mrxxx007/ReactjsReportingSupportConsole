'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Main from './components/Main';

import styles from '../../css/app.css';



// Initialize JQuery UI
//$(function() {
//    $("#menu").menu();
//});

//$(function() {
//    $("#menu").menu({
//        select: function(event, ui) {
//            alert(ui.item.text());
//        }
//    });
//});



// Render application
ReactDOM.render(
    <Main />,
    document.getElementById('app')
);