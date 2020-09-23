import React, { Component } from 'react';
import EntryForm from './EntryFormComponent';
import Sidebar from './SidebarComponent';
import Account from './AccountComponent';
import Budget from './BudgetComponent';

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="maincomponent">
                <Sidebar />
                <h1 className="text-center">Welcome to LemonBudget!</h1>
                <EntryForm />
                <Account />
                <Budget />
            </div>
        );
    };
}

export default MainComponent;