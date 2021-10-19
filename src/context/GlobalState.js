import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//create the initial state
const initialState = {
    transactions: [
        { id: 1, description: "Income 1", amount: 1000 },
        { id: 2, description: "Expense 1", amount: -200 },
        { id: 3, description: "Income 2", amount: 500 },
        { id: 4, description: "Expense 2", amount: -100 },
    ]
}

//create the global context 
export const GlobalContext = createContext(initialState);



// Create a Provider for the Global Context 
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={
            { transactions: state.transactions }}>
                {children}
        </GlobalContext.Provider>
    );
}