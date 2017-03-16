
import React, { Component, PropTypes } from 'react';
import './TransactionHistory.less';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import { formatPrice, formatAmount, formatDate } from 'utils/validation';
import CircularProgress from 'material-ui/CircularProgress';
import {CardText} from 'material-ui/Card';

import httpStatusCodes from 'defs/httpStatusCodes';

import {
    red500
} from 'material-ui/styles/colors';

const errors = {
    [httpStatusCodes.BadRequest]: `Во время загрузки списка произошла ошибка.`
};

class TransactionHistory extends Component {
    static propTypes = {
        onRowSelection: PropTypes.func
    };

    constructor() {
        super();
        this.handleRowSelection = this.handleRowSelection.bind(this);
    }

    handleRowSelection(indexes) {
        const index = indexes[0];
        if (index !== undefined) {
            this.props.onRowSelection(this.props.list.get(index).toJS(), indexes[0]);
        }
    }

    render() {
        var { list, properties, disabled } = this.props;
        const { loaded, pending, error, status, selectedIndex } = properties.toJS();
        list = list.toJS() || [];
        return (
            <div>
                {
                    error &&
                    <CardText style={{color: red500}}>
                        {error || errors[status] || errors[httpStatusCodes.BadRequest]}
                    </CardText>
                }
                {(!loaded || pending) && !error &&
                    <CircularProgress />
                }
                {(!list.length) &&
                    <CardText>Вы еще не совершали ни одного перевода</CardText>
                }
                {(list.length || '') && loaded &&
                    <Table
                        selectable={!disabled}
                        multiSelectable={false}
                        onRowSelection={this.handleRowSelection}
                    >
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                            enableSelectAll={false}
                        >
                            <TableRow>
                                <TableHeaderColumn colSpan="4" style={{textAlign: 'center'}}>
                                    История переводов
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn>Дата</TableHeaderColumn>
                                <TableHeaderColumn>Получатель</TableHeaderColumn>
                                <TableHeaderColumn>Сумма перевода</TableHeaderColumn>
                                <TableHeaderColumn>Баланс</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            deselectOnClickaway={false}
                            showRowHover={true}
                            stripedRows={true}
                        >
                            {
                                list.map(({date, username, amount, balance}, index) =>
                                    <TableRow key={index} selected={selectedIndex === index}>
                                        <TableRowColumn>{formatDate(date)}</TableRowColumn>
                                        <TableRowColumn>{username}</TableRowColumn>
                                        <TableRowColumn>{formatAmount(amount)}</TableRowColumn>
                                        <TableRowColumn>{formatPrice(balance)}</TableRowColumn>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                }
            </div>

        );
    }
}

export default TransactionHistory;