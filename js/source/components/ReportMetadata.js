/**
 * Created by Sergey Popov on 17.12.2016.
 */
'use strict';
import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class ReportMetadata extends React.Component {
    render() {
        return <div>
                <Form onSubmit = "#">
                    <h3>Report metadata</h3>
                    <Button primary type='submit'>Get metadata</Button>
                </Form>
            </div>;
    }
}

export default ReportMetadata