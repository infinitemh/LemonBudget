export const ACCOUNTDATA = [
	{
		id: 1,
		account: 'checking',
		date: new Date(),
		payee: 'Trader Joes',
		category: 'Groceries',
		memo: 'I bought a lot of food today..',
		outflow: -2000.0,
		inflow: 0
	},
	{
		id: 2,
		account: 'checking',
		date: new Date(),
		payee: 'Bar',
		category: 'Dining',
		memo: 'I drank too much..',
		outflow: -5000.0,
		inflow: 0
	},
	{
		id: 3,
		account: 'checking',
		date: new Date(),
		payee: 'Me',
		category: 'Income',
		memo: 'Payday!',
		outflow: 0,
		inflow: 1000000.0
	},
	{
		id: 4,
		account: 'checking',
		date: new Date(),
		payee: 'saving',
		category: 'Transfer',
		memo: 'transfer to saving account',
		outflow: -3000.0,
		inflow: 0
	},
	{
		id: 5,
		account: 'saving',
		date: new Date(),
		payee: 'saving',
		category: 'Emergency Fund',
		memo: 'transfer from checking account',
		outflow: 0,
		inflow: 3000.0
	},

	{
		id: 6,
		account: 'credit',
		date: new Date(),
		payee: 'Amazon',
		category: 'Household goods',
		memo: "Can't ever have enough TP",
		outflow: -1500.0,
		inflow: 0
	},
	{
		id: 7,
		account: 'credit',
		date: new Date(),
		payee: 'T-Mobile',
		category: 'Utilities',
		memo: 'Cell phone bill',
		outflow: -200.0,
		inflow: 0
	}
];
