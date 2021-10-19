import React from 'react'

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History </h3>

            <ul className="list">
                <li className="plus">
                    Income - Salary 
                    <span>$10,000</span>
                    <button className="delete-btn">x</button>
                </li>

                <li className="minus">
                    Expense - Rent
                    <span>$500</span>
                    <button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}
