import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import EntryForm from './EntryFormComponent';
import Sidebar from './SidebarComponent';
import Account from './AccountComponent';
import Budget from './BudgetComponent';

const mapStateToProps = (state) => {
	return {
		accountdata: state.accountdata,
		budgetdata: state.budgetdata
	};
};

class MainComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='maincomponent'>
				<Sidebar />
				{/* <h1 className='text-center'>Welcome to LemonBudget!</h1> */}
				<Switch>
					<Route path='/entryform' component={EntryForm} />
					<Route path='/account' render={() => <Account accountdata={this.props.accountdata} />} />
					<Route path='/budget' render={() => <Budget budgetdata={this.props.budgetdata} />} />
					<Redirect to='/budget' />
				</Switch>
			</div>
		);
	}
}

// export default MainComponent;
export default withRouter(connect(mapStateToProps)(MainComponent));
