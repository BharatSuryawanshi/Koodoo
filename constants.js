const typeBAccountBalanceHistory = [{
    monthNumber: 0, // current month
    account: {
        balance: {
            amount: 300
        },
    },
},
{
    monthNumber: 1, // last month
    account: {
        balance: {
            amount: 400
        },
    },
},
{
    monthNumber: 2, 
    account: {
        balance: {
            amount: 500
        },
    },
},
{
    monthNumber: 3, 
    account: {
        balance: {
            amount: 600
        },
    },
},
{
    monthNumber: 4, 
    account: {
        balance: {
            amount: 700
        },
    },
},
{
    monthNumber: 5, 
    account: {
        balance: {
            amount: 800
        },
    },
},
{
    monthNumber: 6, 
    account: {
        balance: {
            amount: 900
        },
    },
},
{
    monthNumber: 7, 
    account: {
        balance: {
            amount: 1000
        },
    },
}
];

const otherCaseTypeBAccountBalanceHistory = [{
monthNumber: 0, // current month
account: {
    balance: {
        amount: 500
    },
},
},
{
monthNumber: 1, // last month
account: {
    balance: {
        amount: 600
    },
},
},
{
monthNumber: 2, 
account: {
    balance: {
        amount: 700
    },
},
},
{
monthNumber: 3, 
account: {
    balance: {
        amount: 800
    },
},
},
{
monthNumber: 4, // Account balance increased here
account: {
    balance: {
        amount: 900
    },
},
},
{
monthNumber: 5, 
account: {
    balance: {
        amount: 800
    },
},
},
{
monthNumber: 6, 
account: {
    balance: {
        amount: 900
    },
},
},
{
monthNumber: 7, 
account: {
    balance: {
        amount: 1000
    },
},
}];

const typeAAccountBalanceHistory = [{
    monthNumber: 0, // current month
    account: {
        balance: {
            amount: 281
        },
    },
},
{
    monthNumber: 1, // last month
    account: {
        balance: {
            amount: 400
        },
    },
},
{
    monthNumber: 2, 
    account: {
        balance: {
            amount: 543
        },
    },
},
{
    monthNumber: 3, 
    account: {
        balance: {
            amount: 600
        },
    },
}
];

const accountBalanceHistory = [{
    monthNumber: 0, // current month
    account: {
        balance: {
            amount: 500
        },
    },
},
{
    monthNumber: 1, // last month
    account: {
        balance: {
            amount: 600
        },
    },
},
{
    monthNumber: 2,
    account: {
        balance: {
            amount: 700
        },
    },
},
{
    monthNumber: 3,
    account: {
        balance: {
            amount: 700
        },
    },
},
{
    monthNumber: 4,
    account: {
        balance: {
            amount: 750
        },
    },
},
{
    monthNumber: 5,
    account: {
        balance: {
            amount: 800
        },
    },
},
{
    monthNumber: 6,
    account: {
        balance: {
            amount: 900
        },
    },
},
{
    monthNumber: 7,
    account: {
        balance: {
            amount: 1000
        },
    },
}
]


module.exports = {
    typeBAccountBalanceHistory,
    otherCaseTypeBAccountBalanceHistory,
    typeAAccountBalanceHistory,
    accountBalanceHistory
}