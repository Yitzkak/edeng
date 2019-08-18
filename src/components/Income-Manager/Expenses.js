import React from 'react'
import { TableContainer } from '../elements'

function Expenses({expenses}) {
    console.log(expenses);
    return (
        <TableContainer>
            <table>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        expenses && expenses.map( expense => {
                            return(
                                <tr key={expense.id}>
                                    <td>{expense.amount}</td>
                                    <td>{expense.description}</td>
                                    <td>{expense.date}</td>
                                </tr>
                            )
                        })                        
                    }
                </tbody>
            </table>  
        </TableContainer>
    )
}

export default Expenses
