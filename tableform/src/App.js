import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form';

function App() {

  const inititalValues = {
    fullname: '',
    email: '',
    age: '',
    gender: ''
  }

  // pushing data into table state
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({inititalValues});
  const [toggle, setToggle] = useState(false);
  const [contactstable, setContactsTable] = useState([]);

  // on input change form handler function
  const formchangeHandler = (e) => {
      const fieldName = e.target.getAttribute('name');
      const fieldValue = e.target.value;
      const newformData = {...addFormData};
      newformData[fieldName] = fieldValue;

      setAddFormData(newformData);
  }

  // on form submit pushing data from FORM to T
  const submitValue = (e) => {
      e.preventDefault();

      const newContact = {
          fullname: addFormData.fullname,
          email: addFormData.email,
          age: addFormData.age,
          gender: addFormData.gender,
          phone: addFormData.phone
      }

      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
      return e.target.reset();
  }

  // delete row Handler
  const deleteRowHandler = (index) => {
    let updatedContact = [...contacts];
    console.log(updatedContact);
    updatedContact.splice(index,1);
    setContacts(updatedContact);
  }

  // edit row Handler 
  const editrowHandler = (index) => {
    let editRowItem =contacts[index];
    setAddFormData(editRowItem);
  }

  const saveUpdateHandler = (addedUserindex, e) => {
    // e.preventDefault();
    let currentContacts = contacts;
    currentContacts.splice(addedUserindex, 1, addFormData);
    setContacts([...currentContacts]);

  }

  const sortAgeHandler = () => {

    // let sortage = contacts.map(( item ) => item.age);
    // const dataStored = [...contacts].sort((a,b) =>
    //   a.age - b.age
    //   b.age - a.age
    // )
    const newToggle = !toggle;
    setToggle(newToggle);

    const dataSsorted = [...contacts].sort((a,b) => {
      return newToggle
       ? a.age - b.age
       : b.age - a.age;
    });
    setContacts(dataSsorted);
  }

  const checkInputHandler = (index, e) => {
    let inputCheckData = contacts[index];
    if(e.target.checked){
      setContactsTable((data)=> [...data,inputCheckData]);
    }else {
      setContactsTable(contactstable.filter((e) => e!== inputCheckData));
    }
    
  }

  return (
    <div className="App">
      <h1 className="text-center">Table Todo List</h1>
      <Form 
        addFormData={addFormData}
        contacts={contacts}
        contactstable={contactstable}
        formchangeHandler={formchangeHandler}
        submitValue={submitValue}
        deleteRowHandler={deleteRowHandler}
        editrowHandler={editrowHandler}
        saveUpdateHandler={saveUpdateHandler}
        sortAgeHandler={sortAgeHandler}
        checkInputHandler={checkInputHandler}
      />
    </div>
  );
}

export default App;
