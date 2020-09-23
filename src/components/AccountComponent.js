import React, { Component } from 'react';
import {Table} from 'reactstrap';

class Account extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="container">
                <h3 className="text-center">All Accounts</h3>
                <Table striped bordered hover size="sm" responsive>
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
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    };
}

export default Account;