import React, { Component } from 'react';
import { Table } from 'reactstrap';

function RenderBudgetItem({ budgetItem, parentKey }) {
	const budgetEntry = () => {
		return (
			<tr>
				<th scope='row'>
					<strong>{budgetItem.category}</strong>
				</th>
				<td className='text-right'>
					<strong>{budgetItem.budgeted}</strong>
				</td>
				<td className='text-right'>
					<strong>{budgetItem.activity}</strong>
				</td>
				<td className='text-right'>
					<strong>{budgetItem.available}</strong>
				</td>
			</tr>
		);
	};
	const renderedEntry = budgetEntry();
	return <React.Fragment>{renderedEntry}</React.Fragment>;
}

function RenderSubcategories({ budgetItem }) {
	const subcategories = budgetItem.subcategories.map((subcategory) => {
		return (
			<tr key={`${budgetItem.id}.${subcategory.id}`}>
				<th scope='row'>
					<span className='subcategory-name'>{subcategory.category}</span>
				</th>
				<td className='text-right'>{subcategory.budgeted}</td>
				<td className='text-right'>{subcategory.activity}</td>
				<td className='text-right'>{subcategory.available}</td>
			</tr>
		);
	});
	return <React.Fragment>{subcategories}</React.Fragment>;
}

class Budget extends Component {
	render() {
		const budget = this.props.budgetdata.map((category) => {
			return (
				<React.Fragment key={`${category.id}`}>
					<RenderBudgetItem budgetItem={category} />
					<RenderSubcategories budgetItem={category} />
				</React.Fragment>
			);
		});
		return (
			<div className='container'>
				<div className='container text-center'>
					<h3 className='text-center'>$3023.12 to be budgeted</h3>
					<p className='small m-0'>$2000.00 funds for this month</p>
					<p className='small m-0'>$0.00 overspent last month</p>
					<p className='small m-0'>$369372.00 Budgeted</p>
					<p className='small mt-0'>$0.00 budgted in future</p>
				</div>
				<Table striped bordered hover size='sm' responsive>
					<thead className='text-center'>
						<tr>
							<th>Category</th>
							<th>Budgeted</th>
							<th>Activity</th>
							<th>Available</th>
						</tr>
					</thead>
					<tbody>{budget}</tbody>
				</Table>
			</div>
		);
	}
}

export default Budget;
