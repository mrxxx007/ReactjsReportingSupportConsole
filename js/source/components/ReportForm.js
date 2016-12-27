/**
 * Created by Admin on 17.12.2016.
 */
'use strict';
import React from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import * as constant from '../constant';

class ReportForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch(this.props.reportName) {
            case constant.REPORT_TRADE_ACTIVITY:
                return <TradeActivityForm />;
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
        $( "#dateCalendar" ).calendar({
            type: 'date'
        });
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

        return <Form onSubmit={this.handleSubmit}>

            <Form.Field inline>
                <label className="two wide field">Parent Fund Id</label>
                <input type="text" name="parentFunds" className="ui input" placeholder='Parent Fund Id' />
            </Form.Field>
            <Form.Field inline>
                <label className="two wide field">NonParent Fund Id</label>
                <input type="text" name="nonParentFunds" className="ui input" placeholder='NonParent Fund Id' />
            </Form.Field>
            <Form.Field inline>
                <label className="two wide field">Dataset</label>
                <input type="text" name="dataset" className="ui input" placeholder='1(EOD) / 2(Live)' />
            </Form.Field>
            <Form.Field inline>
                <label className="two wide field">Dataset date</label>
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

export default ReportForm
