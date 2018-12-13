import React, { Component } from 'react';

FeesTable.propTypes = {
    conversionRate: PropTypes.number.isRequired,
    originCurrency: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    destinationCurrency: PropTypes.string.isRequired
}

class Conversion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originAmount: '0.00',
            originCurrency: 'USD',
            destinationAmount: '0.00',
            destinationCurrency: 'EUR'
            feeAmount: 0.00,
            conversionRate: 1.5,
            totalCost: 0.00,
            errorMsg: ''
        }

        // bind event listeners to 'this' will be available in the handlers
        this.handleOriginAmountChange = this.handleOriginAmountChange.bind(this);
        this.handleDestAmountChange = this.handleDestAmountChange.bind(this);
        this.handleOriginCurrencyChange = this.handleOriginCurrencyChange.bind(this);
        this.handleDestCurrencyChange = this.handleDestCurrencyChange.bind(this);
        this.handleAjaxFailure = this.handleAjaxFailure.bind(this);
    }

    componentDidMount() {
        // Add a debounced version of )getDestinationAmount() so we avoid server & UI thrashing

    }

    render() {
        if (this.state.errorMsg) {
            let errorMsg = <div className="errorMsg">{this.state.errorMsg}</div>
        }

        return (
            <div>
                {errorMsg}
                <label>Covnert</label>
                <input className="amount-field" />
            </div>
        )
    }
}

export default Conversion;