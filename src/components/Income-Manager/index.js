import React, { Component } from "react";
import { Container, Sidebar, MainArea, MainAreaOne, MainAreaTwo, SectionTitle } from '../elements'
import { connect } from 'react-redux';
import Expenses from './Expenses';
import { addExpense }  from '../../store/actions/expensesActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class IncomeManager extends Component{
    state = {
        amount: '',
        description: '',
        date: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    addExpenses = (e) => {
        e.preventDefault();
        this.props.addExpense(this.state);
    }
    render(){
        const { expenses } = this.props; 
        return(
            <Container>
                <Sidebar></Sidebar>
                <MainArea>
                    <MainAreaOne>
                        <SectionTitle>Expenses</SectionTitle>
                        <form onSubmit= {this.addExpenses}>
                            <input type = "text" id="amount" placeholder="Enter amount..." onChange = {this.handleChange}/>
                            <input type = "text" id="description" placeholder="Short description..." onChange = {this.handleChange}/>
                            <input type = "text" id="date" placeholder="Date..." onChange = {this.handleChange}/>
                            <button>Add</button>
                        </form>
                    </MainAreaOne>
                    <MainAreaTwo>
                        <Expenses expenses = {expenses}/>
                    </MainAreaTwo>
                </MainArea>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        //expenses: state.firestore.ordered.expenses
    }
} 
const mapDispatchToProps = (dispatch) => {
    return{
        addExpense: (expense) => {
            dispatch(addExpense(expense))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'expenses'
    }])
)(IncomeManager);