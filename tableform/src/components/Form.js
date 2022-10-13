import React from "react";

import Table from "./Table";

const Form = ({ contacts, formchangeHandler,addFormData, submitValue, deleteRowHandler, editrowHandler, saveUpdateHandler, sortAgeHandler, contactstable, checkInputHandler, isChecked }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="sm-12">
                    <form className="row gap-3">
                        <input type="text" name="fullname" placeholder="enter a name" value={addFormData.fullname} onChange={formchangeHandler} />
                        <input type="text" name="email" placeholder="enter a email" value={addFormData.email} onChange={formchangeHandler} />
                        <input type="text" name="age" placeholder="enter a age" value={addFormData.age} onChange={formchangeHandler} />
                        <input type="text" name="gender" placeholder="enter a gender" value={addFormData.gender} onChange={formchangeHandler} />
                        <input type="text" name="phone" placeholder="enter a phone" value={addFormData.phone} onChange={formchangeHandler} />
                        <button onClick={submitValue} className="btn btn-primary mb-3">Submit</button>
                        {/* <button onClick={submitValue} className="btn btn-primary mb-3">Submit</button> */}
                    </form>
                </div>
            </div>
            <Table 
                contacts={contacts} 
                contactstable={contactstable}
                deleteRowHandler={deleteRowHandler}
                editrowHandler={editrowHandler}
                saveUpdateHandler={saveUpdateHandler}
                sortAgeHandler={sortAgeHandler}
                checkInputHandler={checkInputHandler}
                isChecked={isChecked}
            />
        </div>
    )
}

export default Form;