/**
 * Created by Admin on 17.12.2016.
 */
"use strict";
import React from 'react';
import ReportContent from './ReportContent';
import { Grid, Menu, Segment, Input } from 'semantic-ui-react';

import styles from '../../../css/components/AvailableReports.css';

class AvailableReports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.reports,
            activeReport: null
        };
    }

    handleMenuItemClick (e, {name}) {
        this.setState({ activeReport: name });
    }

    onSearch (e) {
        //console.log(e.target);
        var value = e.target.value.toLowerCase();
        if (!value) {
            this.setState({data: this.props.reports});
            return;
        }

        var searchData = this.props.reports.filter(function(item) {
            if (item.toString().toLowerCase().indexOf(value) >= 0) {
                return true;
            }
        });

        this.setState({data: searchData});
    }


    render() {
        var self = this;
        const activeItem = this.state.activeReport;

        //TODO: check if css is needed in the import

        //var reportList = this.state.data.map(function(item, index) {
        //    return <li><div>{item}</div></li>;
        //});
        //return <div className="layoutLeftPanel"><ul id="menu">{reportList}</ul></div>;
        var menuElements = this.state.data.map(function(item, index) {
            return <Menu.Item
                name={item}
                active={activeItem === item}
                onClick={self.handleMenuItemClick.bind(self)}
                >
                {item}
            </Menu.Item>;
        });
        return <Grid>
                <Grid.Column width={4}>
                    <Input fluid
                           icon='search' placeholder='Search...'
                           onChange={self.onSearch.bind(self)} />
                    <Menu fluid vertical tabular>
                        {menuElements}
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment>
                        <ReportContent activeReport={self.state.activeReport}/>
                    </Segment>
                </Grid.Column>
            </Grid>
    }
}

export default AvailableReports