import React, { useContext } from 'react';

import appContext from '../AppContext';

const History = () => {
    const listDetail = useContext(appContext);

    // const sign = listDetail.amount < 0 ? '-' : '+';

    return (
        <div className="pb-4">
            <h2 className="text-left font-medium text-1xl text-gray-900 border-b border-indigo-600 pb-2 mb-4">History</h2>
            <div>
                {
                    listDetail.datalist.map((data, index) => {
                        return(
                            <div key={index}>
                                <div className={`flex flex-wrap justify-between w-fdivl mb-2 bg-white p-2 border-r-6 border-r ${data.amount < 0 ? "border-red-400" : "border-green-400"}`}>
                                    <span className='text-left font-medium text-1xl text-gray-900'>{data.item}</span>
                                    <span className='text-left font-medium text-1xl text-gray-900'>{data.amount}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default History