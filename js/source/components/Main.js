/**
 * Created by Admin on 20.12.2016.
 */
'use strict';
import React from 'react';
import AvailableReports from './AvailableReports';


import styles from '../../../css/components/Main.css';

var allReports = [
    "Trade Activity",
    "Open PnL",
    "Realized PnL",
    "Trade Enquiry"
];

class Main extends React.Component {
    render() {
        return <div className="container">
                <AvailableReports reports={allReports}/>
            </div>;
    }
}

export default Main