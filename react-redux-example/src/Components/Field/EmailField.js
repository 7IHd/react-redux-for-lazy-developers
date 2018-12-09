import React, { Component } from 'react';
import { EmailError, Email } from "../Theme/Theme";

class EmailField extends Component {
    render () {
        return (
            <React.Fragment>
                <span>
                    <EmailError name="email" component="div" />
                    <Email type="email" name="email" />
                </span>
            </React.Fragment>
        )
    };
}

export default EmailField;