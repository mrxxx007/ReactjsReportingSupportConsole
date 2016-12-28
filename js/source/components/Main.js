/**
 * Created by Sergey Popov on 20.12.2016.
 */
'use strict';
import React from 'react';
import AvailableReports from './AvailableReports';
import { Segment } from 'semantic-ui-react';
import * as constant from '../constant';


import styles from '../../../css/components/Main.css';


class Main extends React.Component {
    render() {
        return <div className="container">
                <Segment vertical textAlign='center'>
                    <h1>Reporting Support Console</h1>
                </Segment>
                <Segment vertical>
                    <AvailableReports reports={constant.ALL_REPORTS}/>
                </Segment>
            </div>;
    }
}

export default Main