
import React, { Component, PropTypes } from 'react';
import { RegisterPage } from 'components';
import { connect } from 'react-redux';
import { TransactionHistory } from 'components';
import { transactionHistory, selectTransaction } from 'actions/transactions';


const mapStateToProps = ({transactions: {list, properties}}) => {
    return {
        list,
        properties
    };
};
@connect(mapStateToProps)
class PWTransactionHistory extends Component {

    constructor() {
        super();
        this.handleRowSelection = this.handleRowSelection.bind(this);
    }

    componentWillMount() {
        const { properties, dispatch } = this.props;
        const { loaded } = properties.toJS();
        if (!loaded) {
            dispatch(transactionHistory());
        }
    }

    handleRowSelection(item, index) {
        this.props.dispatch(selectTransaction({item, index}));
    }

    render() {
        const { list, properties, disabled } = this.props;
        return (
            <TransactionHistory
                    onRowSelection={this.handleRowSelection}
                    disabled={disabled}
                    properties={properties}
                    list={list}
                />
        );
    }
}

export default PWTransactionHistory;