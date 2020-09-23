import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="sidenav">
                <div className="row">
                    <div className="col-12 menuitem m-3">LemonBudget</div>
                    <div className="col-12 menuitem m-3"><i className="fa fa-plus-circle"/></div>
                    <div className="col-12 menuitem m-3">Budget</div>
                    <div className="col-12 menuitem m-3">Accounts</div>
                    <div className="col-12 menuitem m-3">Report</div>
                </div>
            </div>
        );
    };
}

export default Sidebar;