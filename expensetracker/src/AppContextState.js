import { useState } from 'react';

import appContext from "./AppContext";

const AppContextState = ( props ) => {
    const inititalValues = {
        item: '',
        amount: ''
    }

    const [ formdata, setFormData ] = useState({inititalValues});
    const [ datalist, setDataList ] = useState([]);

    const formChangeHandler = (e) => {
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;
        const newformData = {...formdata};
        newformData[fieldName] = fieldValue;

        setFormData(newformData);
    }

    const updateDataHandler = ( e, index ) => {
        e.preventDefault();
        const listdetail = {
            item: formdata.item,
            amount: formdata.amount
        }
        const newlistDetail = [...datalist, listdetail];
        setDataList(newlistDetail);
    }

    return (
        <appContext.Provider value={{formChangeHandler, datalist, updateDataHandler}} >
            {props.children}
        </appContext.Provider>
    )
}

export default AppContextState;