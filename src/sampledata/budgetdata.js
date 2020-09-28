export const BUDGETDATA = [
	{
		id: 1,
		category: 'food',
		subcategories: [
			{
				id: 1,
				category: 'groceries',
				budgeted: 3000.0,
				activity: 29.0,
				get available() {
					return this.budgeted - this.activity;
				}
			},
			{
				id: 2,
				category: 'dining',
				budgeted: 3000.0,
				activity: 2999.0,
				get available() {
					return this.budgeted - this.activity;
				}
			}
		],
		budgeted: 123124,
		activity: 123412541,
		available: 1231254
	},
	{
		id: 2,
		category: 'bills',
		subcategories: [
			{
				id: 1,
				category: 'phone bill',
				budgeted: 300.0,
				activity: 209.0,
				get available() {
					return this.budgeted - this.activity;
				}
			},
			{
				id: 2,
				category: 'insurance',
				budgeted: 200.0,
				activity: 29.0,
				get available() {
					return this.budgeted - this.activity;
				}
			}
		],
		budgeted: 123124,
		activity: 123412541,
		available: 1231254
	},
	{
		id: 3,
		category: 'household goods',
		subcategories: [
			{
				id: 1,
				category: 'bathroom stuff',
				budgeted: 30.0,
				activity: 2.0,
				get available() {
					return this.budgeted - this.activity;
				}
			},
			{
				id: 2,
				category: 'clothes',
				budgeted: 300.0,
				activity: 299.0,
				get available() {
					return this.budgeted - this.activity;
				}
			}
		],
		budgeted: 123124,
		activity: 123412541,
		available: 1231254
	}
];
