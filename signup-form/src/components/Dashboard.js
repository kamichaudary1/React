import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Dashboard = (item) => {

  const [showUsers, setShowUsers] = useState({});

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('currentUser'));
    if( items ){
      setShowUsers( items[0] );
    }
  },[]);

  const user = localStorage.getItem('currentUser');
  if(!user) return <Navigate to="/" />;

  const logoutHandler =() => {
    window.localStorage.removeItem("currentUser");
    window.location.href="/"
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>LoggedIn User</h2>
      <div>
        <div>{showUsers.fname}</div>
        <div>{showUsers.lname}</div>
        <div>{showUsers.email}</div>
        <div>{showUsers.pass}</div>
      </div>
      <button onClick={logoutHandler} className="btn btn-primary mb-3 logout-btn">Logout</button>
    </div>
  )
}

export default Dashboard