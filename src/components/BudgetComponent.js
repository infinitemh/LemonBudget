import React, { Component } from 'react';
import {Table} from 'reactstrap';

class Budget extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="container">
                <div className="container text-center">
                    <h3 className="text-center">Budget</h3>
                    <h3 className="text-center">$xx to be budgeted</h3>
                    <p>
                        $xx funds for this month
                    </p>
                    <p>
                        $xx overspent last month
                    </p>
                    <p>
                        $xx Budgeted
                    </p>
                    <p>
                        $xx budgted in future
                    </p>
                </div>
                <Table striped bordered hover size="sm" responsive>
                    <thead>
                    <tr>
                        <th>Category</th>
                        <th>Budgeted</th>
                        <th>Activity</th>
                        <th>Available</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                       
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
 
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    };
}

export default Budget;