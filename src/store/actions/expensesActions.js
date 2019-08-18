export const addExpense = (expense) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        firestore.collection('expenses').add({
            ...expense
        }).then(() => {
            console.log('I am here');
            dispatch({ type: 'ADD_EXPENSE', expense});
        }).catch((err) => {
            dispatch({ type: 'ADD_EXPENSE_ERROR', err});
        })  
    }
};