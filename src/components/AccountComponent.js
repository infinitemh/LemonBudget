import React, { Component } from 'react';
import { Table } from 'reactstrap';

function RenderTransaction({ transaction }) {
	return (
		<React.Fragment>
			<th scope='row'>{transaction.account}</th>
			<td>{transaction.date.toLocaleDateString()}</td>
			<td>{transaction.payee}</td>
			<td>{transaction.category}</td>
			<td>{transaction.memo}</td>
			<td>{transaction.outflow}</td>
			<td>{transaction.inflow}</td>
		</React.Fragment>
	);
}

class Account extends Component {
	render() {
		const ledger = this.props.accountdata.map((transaction) => {
			return (
				<tr key={transaction.id}>
					<RenderTransaction transaction={transaction} />
				</tr>
			);
		});
		return (
			<div className='container'>
				<h3 className='text-center'>All Accounts</h3>
				<Table striped bordered hover size='sm' responsive>
					<thead>
						<tr>
							<th>Account</th>
							<th>Date</th>
							<th>Payee</th>
							<th>Category</th>
							<th>Memo</th>
							<th>Outflow</th>
							<th>Inflow</th>
						</tr>
					</thead>
					<tbody>{ledger}</tbody>
				</Table>
			</div>
		);
	}
}

export default Account;
