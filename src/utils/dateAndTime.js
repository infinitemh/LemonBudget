import moment from 'moment';

export const getDefaultDate = () => {
	const thedate = moment().format('YYYY-MM-DD');
	return thedate;
};
export const getDefaultTime = () => {
	const thetime = moment().format('HH:mm');
	return thetime;
};
