import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EntryForm from './EntryFormComponent';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='sidenav'>
				<div className='row'>
					<div className='col-12 menuitem m-3'>
						<Link to='budget' className='menuitem'>
							LemonBudget
						</Link>
					</div>
					<div className='col-12 menuitem m-3'>
						{/* <Link to='/entryform' className='menuitem'>
							<i className='fa fa-plus-circle' />
						</Link> */}
						<EntryForm />
					</div>
					<div className='col-12 m-3'>
						<Link to='/budget' className='menuitem'>
							Budget
						</Link>
					</div>
					<div className='col-12 m-3'>
						<Link to='/account' className='menuitem'>
							Accounts
						</Link>
					</div>
					<div className='col-12 m-3'>
						<Link to='/report' className='menuitem'>
							Report
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Sidebar;
