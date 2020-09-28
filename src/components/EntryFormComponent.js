import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { getDefaultDate, getDefaultTime } from '../utils/dateAndTime';

class EntryForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(values) {
		const theValues = JSON.stringify(values);
		console.log(theValues);
		alert(theValues);
		this.toggleModal();
	}

	render() {
		return (
			<div className='container'>
				<Button outline color='success' onClick={this.toggleModal}>
					<i className='fa fa-plus-circle' />
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size='lg'>
					<ModalHeader toggle={this.toggleModal}>Enter Transaction</ModalHeader>
					<ModalBody>
						<div className='container'>
							<div className='row justify-content-center'>
								<div className='col poppins'>
									<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
										<div className='form-group row'>
											<div className='col-sm-2'>
												<label htmlFor='transactionDate'>Date</label>
											</div>
											<div className='col-sm-4'>
												<Control
													type='date'
													name='transactionDate'
													id='transactionDate'
													model='.transactionDate'
													className='form-control'
													defaultValue={getDefaultDate()}
												/>
											</div>
											<div className='col-sm-2'>
												<label htmlFor='transactionTime'>Time</label>
											</div>
											<div className='col-sm-4'>
												<Control
													type='time'
													name='transactionTime'
													id='transactionTime'
													model='.transactionTime'
													className='form-control'
													defaultValue={getDefaultTime()}
												/>
											</div>
										</div>
										<div className='form-group row'>
											<div className='col-sm-2'>
												<label htmlFor='category'>Category</label>
											</div>
											<div className='col-sm-10'>
												<Control.select
													name='category'
													id='category'
													model='.category'
													className='form-control'
													defaultValue={1}
												>
													<option>1</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
													<option>5</option>
												</Control.select>
											</div>
										</div>
										<div className='form-group row'>
											<div className='col-sm-2'>
												<label htmlFor='transactionMemo'>Notes</label>
											</div>
											<div className='col-sm-10'>
												<Control.textarea
													name='transactionMemo'
													id='transactionMemo'
													model='.transactionMemo'
													className='form-control'
													rows='6'
												/>
											</div>
										</div>
										<div className='form-group row justify-content-between'>
											<div className='col-sm-2'>
												<label htmlFor='transactionAmount' sm={2}>
													Amount
												</label>
											</div>
											<div className='col-sm-6'>
												<Control.text
													name='transactionAmount'
													id='transactionAmount'
													model='.transactionAmount'
													className='form-control'
												/>
											</div>
										</div>
										<div className='form-group row justify-content-end'>
											<div className='col'>
												<Button
													type='submit'
													value='submit'
													outline
													color='success'
													block
													className='form-control'
												>
													Submit
												</Button>
											</div>
										</div>
									</LocalForm>
								</div>
							</div>
						</div>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default EntryForm;
