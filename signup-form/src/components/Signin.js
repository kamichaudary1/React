import React from "react";
import { Link, Navigate } from "react-router-dom";

const Signin = ( {values, setValues, signinHandler} ) => {

    const user = localStorage.getItem('currentUser');
    if(user) return <Navigate to="/Dashboard" />;

    const signinchangeHandler = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="container">
            <h1>Login Form</h1>
            <div className="row">
            <div className="sm-12">
                <form action="" className="row gap-3">
                <input
                    name="fname"
                    onChange={signinchangeHandler}
                    type="text" className="form-control" 
                    placeholder={values.fname}
                />
                    <input 
                    name="lname" 
                    onChange={signinchangeHandler}
                    type="text" className="form-control" 
                    placeholder={values.lname}
                />
                    <input 
                    name="email" 
                    onChange={signinchangeHandler}
                    type="email" className="form-control" 
                    placeholder={values.email}
                />
                    <input 
                    name="pass" 
                    onChange={signinchangeHandler}
                    type="password" className="form-control" 
                    placeholder={values.pass}
                />
                <button onClick={signinHandler} className="btn btn-primary mb-3">Login</button>
                <button className="btn btn-primary mb-3"><Link to="/Signup" style={{color: "white"}}>SIGNUP</Link></button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Signin;
