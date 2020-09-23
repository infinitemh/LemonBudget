import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';

const EF = (props) => {
    return (
      <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Date</Label>
        <Col sm={4}>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </Col>
        <Label for="examplePassword" sm={2}>Time</Label>
        <Col sm={4}>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>Major Category</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>Minor Category</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Notes</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <FormGroup row className="justify-content-between">
        <Label for="exampleEmail" sm={2}>Amount</Label>
        {/* <Col sm={{size: 6, offset:4}}> */}
        <Col sm={{size: 6}}>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </Col>
        </FormGroup>
      <FormGroup check row className="justify-content-end">
      <Col>
          <Button outline color="success" block="true">Submit</Button>
        </Col>
      </FormGroup>
    </Form>
    );
  }
  

class EntryForm extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="row justify-content-center">
                <div className="col-10 poppins">
                    <EF />
                </div>
            </div>
        );
    };
}

export default EntryForm;