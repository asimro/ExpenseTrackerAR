import React, { useState } from 'react'

export const AddTransaction = () => {

    const [description, setDescription] = useState();
    const [amount, setAmount] = useState();

    return (
        <div>
            <h3>Add Transaction Here</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text"
                        id="description"
                        placeholder="Transaction Detials"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                    </label>
                    <input type="number"
                        id="amount"
                        placeholder="Value of Transaction"
                        value={amount}
                        onChange={(e)=>{setAmount(e.target.value)}}
                    />
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
