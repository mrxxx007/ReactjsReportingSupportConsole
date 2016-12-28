/**
 * Created by Sergey Popov on 17.12.2016.
 */
'use strict';
import React from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import * as constant from '../constant';

class ReportForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    initCalendarCallback() {
        console.log('Callback function');
        $( "#dateCalendar" ).calendar({
            type: 'date'
        });
    }

    render() {
        switch(this.props.reportName) {
            case constant.TRADE_ACTIVITY_REPORT:
                return <TradeActivityForm initCalendarCallback={this.initCalendarCallback.bind(this)} />;
            case constant.CASH_BALANCE_REPORT:
                return <CashBalanceForm initCalendarCallback={this.initCalendarCallback.bind(this)} />;
            default:
                return <Message negative>The report "{this.props.reportName}" could not be found</Message>;
        }

    }
}


class TradeActivityForm extends React.Component {
    handleSubmit(e, { formData }) {
        e.preventDefault();
        //JSON.stringify(formData, null, 2)

        console.log(formData);
    }

    componentDidMount() {
        //console.log("Did mount");
        this.props.initCalendarCallback();
    }

    render() {
        //return <Form onSubmit={this.handleSubmit}>
        //        <Form.Field inline>
        //            <label className="two wide field">Label text</label>
        //            <Input placeholder='First name' />
        //        </Form.Field>
        //        <Form.Field inline>
        //            <label className="two wide field">Second name</label>
        //            <Input placeholder='First name' width={4} fluid></Input>
        //        </Form.Field>
        //    </Form>;
        var labelClassName = "two wide field";

        return <Form onSubmit={this.handleSubmit}>

            <Form.Field inline>
                <label className={labelClassName}>Parent Fund Id</label>
                <input type="text" name="parentFunds" className="ui input" placeholder='Parent Fund Id' />
            </Form.Field>
            <Form.Field inline>
                <label className={labelClassName}>NonParent Fund Id</label>
                <input type="text" name="nonParentFunds" className="ui input" placeholder='NonParent Fund Id' />
            </Form.Field>
            <Form.Field inline>
                <label className={labelClassName}>Dataset</label>
                <input type="text" name="dataset" className="ui input" placeholder='1(EOD) / 2(Live)' />
            </Form.Field>
            <Form.Field inline>
                <label className={labelClassName}>Dataset date</label>
                <div style={{display: "inline-block", width: "12.5%"}}>
                    <div className="ui calendar" id="dateCalendar">
                        <div className="ui input left icon">
                            <i className="calendar icon"></i>
                            <input type="text" name="datasetDate" placeholder="Date/Time"/>
                        </div>
                    </div>
                </div>
            </Form.Field>

            <Button primary type='submit'>Get report</Button>
        </Form>
    }
}

class CashBalanceForm extends React.Component {
    handleSubmit(e, { formData }) {
        //e.preventDefault();
        //JSON.stringify(formData, null, 2)

        console.log(formData);
    }

    componentDidMount() {
        this.props.initCalendarCallback();
    }

    render() {
        var labelClassName = "two wide field";
        
        return <Form method="POST" onSubmit={this.handleSubmit} target="_blank">
            <Form.Field inline>
                <label className={labelClassName}>Parent Fund Selection</label>
                <input type="text" name="parentFundSelection" className="ui input" placeholder='Parent Fund Selection' />
            </Form.Field>
            <Form.Field inline>
                <label className={labelClassName}>Non-Parent Fund Selection</label>
                <input type="text" name="nonParentFundSelection" className="ui input" placeholder='Non-Parent Fund Selection' />
            </Form.Field>
            <Form.Field inline>
                <label className={labelClassName}>Dataset</label>
                <input type="text" name="dataset" className="ui input" placeholder='1(EOD) / 2(Live)' />
            </Form.Field>
            <Form.Field inline>
                <label className={labelClassName}>Dataset date</label>
                <div style={{display: "inline-block", width: "12.5%"}}>
                    <div className="ui calendar" id="dateCalendar">
                        <div className="ui input left icon">
                            <i className="calendar icon"></i>
                            <input type="text" name="datasetDate" placeholder="Date/Time"/>
                        </div>
                    </div>
                </div>
            </Form.Field>
            <Form.Field inline>
                <label className={labelClassName}>Account</label>
                <input type="text" name="account" className="ui input" placeholder='Account' />
            </Form.Field>
            <Form.Field inline>
                <label className={labelClassName}>Currency</label>
                <input type="text" name="currency" className="ui input" placeholder='Currency' />
            </Form.Field>
            <Form.Field inline>
                <label className={labelClassName}>Max Rows</label>
                <input type="text" name="maxRows" className="ui input" placeholder='Max Rows' />
            </Form.Field>

            <Button primary type='submit'>Get report</Button>
        </Form>
    }
}

export default ReportForm
