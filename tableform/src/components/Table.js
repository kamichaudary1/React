import React from "react";

const Table = ({ contacts, deleteRowHandler, editrowHandler, saveUpdateHandler, sortAgeHandler, contactstable, checkInputHandler, isChecked }) => {

    return (
        <div>
            <h2 className="text-center">Form Data</h2>
            <form>
                <table className="table table-striped" cellPadding="0" width="100%" border="1px solid #000">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th onClick={sortAgeHandler}>Age</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th>Actions</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((contact, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{contact.fullname}</td> 
                                        <td>{contact.email}</td>
                                        <td>{contact.age}</td>
                                        <td>{contact.gender}</td>
                                        <td>{contact.phone}</td>
                                        <td><button type="button" className="btn btn-primary" onClick={() => editrowHandler(index)}>Edit</button></td>
                                        <td><button type="button" className="btn btn-success mb-3" onClick={() => saveUpdateHandler(index)}>Save</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => deleteRowHandler(index)}>Delete</button></td>
                                        <td>
                                            <input defaultChecked={false} type="checkbox" value={index} checked={contact.isChecked}  
                                            onChange={(e) => checkInputHandler(index, e)} className="form-check-input" />
                                        </td>
                                    </tr> 
                                )
                            })
                        }
                    </tbody>
                </table>
            </form>
            <h2 className="text-center" style={{marginTop: "100px"}}>Selected Data Field</h2>
            <table className="table table-striped" cellPadding="0" width="100%" border="1px solid #000" style={{marginBottom:"200px"}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th onClick={sortAgeHandler}>Age</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Actions</th>  
                    </tr>
                </thead>
                <tbody>
                    {
                        contactstable.map((tabledata, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{tabledata.fullname}</td>
                                    <td>{tabledata.email}</td>
                                    <td>{tabledata.age}</td>
                                    <td>{tabledata.gender}</td>
                                    <td>{tabledata.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default Table;