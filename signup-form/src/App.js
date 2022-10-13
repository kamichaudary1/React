import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
// import PrivateRoutes from './components/PrivateRoute';


const App = () => {

  const initialValues = {
    fname: "Firat Name",
    lname: "Last Name",
    pass: "***",
    email: "Your email here"
  };

  const[values, setValues] = useState(initialValues);
  const [formValue, setUpdateValues] = useState([]);

  // signup function
  const signupHandler = (e) => {
    e.preventDefault();
    let newData = formValue;
    newData.push(values);
    setUpdateValues(newData);
    localStorage.setItem('signupdata', JSON.stringify(formValue));
  }
  let userlogged = JSON.parse(localStorage.getItem('signupdata'));
  //console.log(userlogged);

  // login function
  const signinHandler = (e) => {
    e.preventDefault();
    //validating current user
    let currentUser =  userlogged.filter(item => item.email === values.email);
    
    if( currentUser[0].email === values.email && currentUser[0].pass === values.pass ){
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      window.location.href="/Dashboard"
    }else{
      localStorage.setItem('currentUser', " ");
    }

  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route element={<PrivateRoutes />}>
            <Route path="Dashboard" element={<Dashboard />} exact />
          </Route> */}
          <Route index element={<Signin 
            values={values}
            setValues={setValues}
            signinHandler={signinHandler}
          />} />
          <Route>
            <Route path="/Signup" element={<Signup 
              values={values}
              setValues={setValues}
              signupHandler={signupHandler}
            />} />
          </Route>
          <Route path="/Dashboard" element={<Dashboard /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
