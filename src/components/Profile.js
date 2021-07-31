import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import Header from './../common/Header';

function Profile () {

	if(!localStorage.getItem('user')){
    return <Redirect to="/login" />
  }

  let user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>

    	<Header />

       <h5><b>Name:</b> {user.name} </h5>
       <h6><b>Email:</b> {user.email} </h6>
       
    </div>
  );
}

export default Profile;

