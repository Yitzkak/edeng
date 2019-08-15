const initState = {
    expenses: [
        { id: 1, amount: 200, description: "Shirt", date:"20/3/2019"},
        { id: 2, amount: 400, description: "Shoe",  date:"20/3/2019"},
        { id: 3, amount: 800, description: "Milk",  date:"20/3/2019"}
    ]
}

const incomemangerReducer = (state = initState, action) => {
    console.log('action type = ', action.type);
    switch (action.type) {
        case 'ADD_EXPENSE':
            console.log('Got here also');
            console.log("Add Expense", action.expense)
            return state;
        case 'ADD_EXPENSE_ERROR': 
            console.log("Add Expense Error", action.err)
            return state;
        default:
            console.log('Got here');
            return state;
    } 
}

export default incomemangerReducer;