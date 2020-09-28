import { ACCOUNTDATA } from '../sampledata/accountdata';
import { BUDGETDATA } from '../sampledata/budgetdata';

export const initialState = {
	accountdata: ACCOUNTDATA,
	budgetdata: BUDGETDATA
};

export const Reducer = (state = initialState, action) => {
	return state;
};
