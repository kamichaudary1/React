import React, { useContext, useEffect, useState } from 'react';
import appContext from '../AppContext';

const IncomeExpense = () => {
  const [transitions, setTransitions] = useState([]);
  const incomeExpenseDetail = useContext(appContext);

  useEffect(( ) => {
    console.log(incomeExpenseDetail.datalist);
    setTransitions(incomeExpenseDetail.datalist);
  },[incomeExpenseDetail])

  const amount = transitions.map(item => item.amount);

  const total = amount.reduce((acc, item) => (acc += +item), 0);
  const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += +item), 0);
  const expense = amount.filter(item => item < 0).reduce((acc, item) => (acc += +item), 0);

  return (
    <div className='py-4'>
        <h2 className="text-left font-medium text-1xl text-gray-900">Your Balance</h2>
        <span className="text-left font-bold text-4xl text-gray-800">${total}</span>
        <ul className="bg-white p-6 mt-4 mb-4 shadow-black flex flex-wrap justify-between">
          <li>
            <h3 className="text-left font-medium text-xl text-gray-900 uppercase">Income</h3>
            <h4 className="text-center font-medium text-1xl text-gray-500 text-green-400">${income}</h4>
          </li>
          <li>
            <h3 className="text-left font-medium text-xl text-gray-900 uppercase">Expense</h3>
            <h4 className="text-center font-medium text-1xl text-gray-500 text-red-400">${expense}</h4>
          </li>
        </ul>
    </div>
  )
}

export default IncomeExpense;