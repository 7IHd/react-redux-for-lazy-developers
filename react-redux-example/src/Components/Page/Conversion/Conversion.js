import React, { Component } from 'react';
import debounce from "lodash.debounce";

FeesTable.propTypes = {
    conversionRate: PropTypes.number.isRequired,
    originCurrency: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    destinationCurrency: PropTypes.string.isRequired
};

class Conversion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originAmount: '0.00',
            originCurrency: 'USD',
            destinationAmount: '0.00',
            destinationCurrency: 'EUR',
            feeAmount: 0.00,
            conversionRate: 1.5,
            totalCost: 0.00,
            errorMsg: ''
        };

        // bind event listeners to 'this' will be available in the handlers
        this.handleOriginAmountChange = this.handleOriginAmountChange.bind(this);
        this.handleDestAmountChange = this.handleDestAmountChange.bind(this);
        this.handleOriginCurrencyChange = this.handleOriginCurrencyChange.bind(this);
        this.handleDestCurrencyChange = this.handleDestCurrencyChange.bind(this);
        this.handleAjaxFailure = this.handleAjaxFailure.bind(this);
    }

    componentDidMount() {
        // Add a debounced version of _getDestinationAmount() so we avoid server & UI Thrashing.
        // See http://stackoverflow.com/questions/23123138/perform-debounce-in-react-js/28046731#28046731
        this.makeConversionAjaxCall = debounce(this._makeConversionAjaxCall, 350);
        this.makeFeeAjaxCall = debounce(this._makeFeeAjaxCall, 350);

        this.originAmountInput.focus();
    };

    render() {
        if (this.state.errorMsg) {
            let errorMsg = <div className="errorMsg">{this.state.errorMsg}</div>
        }

        return (
            <div>
                {errorMsg}
                <label>Convert</label>
                <input className="amount-field" />
            </div>
        )
    };
}

export default Conversion;