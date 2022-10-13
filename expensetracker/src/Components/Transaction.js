import React, { useContext } from 'react';

import appContext from '../AppContext';

const Transaction = ( props ) => {
    const formData = useContext(appContext);

    return (
        <div className='pb-4'>
            <h2 className="text-left font-medium text-1xl text-gray-900 border-b border-indigo-600 pb-2 mb-8">Add New Transactions</h2>
            <form onSubmit={(e) => formData.updateDataHandler(e, formData.index)} className="flex flex-wrap">
                <label htmlFor="">Text</label>
                <input 
                    type="text" 
                    name="item" 
                    value={formData.item} 
                    onChange={formData.formChangeHandler} 
                    className='w-full p-2 mt-2' 
                />
                <label htmlFor="">Amount (Negative-Expense, Positive-Salary)</label>
                <input 
                    type="text" 
                    name="amount" 
                    value={formData.amount} 
                    onChange={formData.formChangeHandler} 
                    className='w-full p-2 mt-2' 
                />
                <button className='p-4 bg-orange-400 text-1xl text-center text-gray-900 font-bold mt-4 text-white'>Add Transaction</button>
            </form>
        </div>
    )
}

export default Transaction