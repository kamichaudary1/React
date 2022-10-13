import React from "react";

const Signup = ( {values, setValues, signupHandler} ) => {

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    
  }
  
  return (
    <div className="container">
      <h1>SignUp Form</h1>
      <div className="row">
        <div className="sm-12">
          <form action="" className="row gap-3">
            <input
              name="fname" 
              onChange={changeHandler}
              type="text" className="form-control" 
              placeholder={values.fname}
            />
            <input 
              name="lname" 
              onChange={changeHandler}
              type="text" className="form-control" 
              placeholder={values.lname}
            />
            <input 
              name="email" 
              onChange={changeHandler}
              type="email" className="form-control" 
              placeholder={values.email}
            />
            <input 
              name="pass" 
              onChange={changeHandler}
              type="password" className="form-control" 
              placeholder={values.pass}
            />
            <button onClick={signupHandler} type="submit" className="btn btn-primary mb-3">SIGNUP</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
