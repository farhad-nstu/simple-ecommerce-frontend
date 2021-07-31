import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

function Protected (props) {

	let Cmp = props.Cmp;

	if(!localStorage.getItem('user')){
    return <Redirect to="/login" />
  }

  return (
    <div>
       <Cmp />
    </div>
  );
}

export default Protected;

