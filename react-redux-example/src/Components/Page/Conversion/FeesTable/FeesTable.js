import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import debounce from 'lodash.debounce';

class FeesTable extends Component {
    render() {
        let { conversionRate, fee, total, originCurrency, destinationCurrency } = this.props;

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Conversion Rate</td>
                            <td>1 {originCurrency} -> {conversionRate.toFixed(2)} {destinationCurrency}</td>
                        </tr>
                        <tr>
                            <td>Fee</td>
                            <td>{fee.toFixed(2)} {originCurrency}</td>
                        </tr>
                        <tr>
                            <td className="total-label">Total Cost</td>
                            <td>{total.toFixed(2)} {originCurrency}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FeesTable;