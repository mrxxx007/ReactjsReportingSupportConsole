/**
 * Created by Admin on 17.12.2016.
 */
'use strict';
import React from 'react';
import ReportMetadata from './ReportMetadata';
import ReportForm from './ReportForm';

import { Segment } from 'semantic-ui-react';

import styles from '../../../css/components/ReportContent.css';

class ReportContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //TODO: check if css is needed in the import
            //<div className="layoutRightPanel">
        return <div>
                <h2>{this.props.activeReport}</h2>
                <Segment>
                    <ReportMetadata />
                </Segment>
                <Segment>
                    <ReportForm reportName={this.props.activeReport}/>
                </Segment>
            </div>;
    }
}

export default ReportContent