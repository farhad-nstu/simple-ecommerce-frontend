import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import axios from 'axios';
import Header from './../common/Header';


export default class Login extends Component {
    state= {
        email: "",
        password: "",
        message: ''
    }

    formHandler = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/api/login', data)
        .then(response => {
            // console.log(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data));
            this.setState({
                loggedIn: true
            })
        })
    }

    render() {

        if(localStorage.getItem('user')){
            return <Redirect to="/add" />
        }

        return (
            <div>   

                <Header />

                <section class="page-section" id="contact">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Sign In Now</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form onSubmit={this.formHandler} id="contactForm" name="sentMessage" novalidate="novalidate">

                            <div class="row align-items-stretch mb-5">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({email: e.target.value})}} class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({password: e.target.value})}} class="form-control" id="password" type="password" name="password" placeholder="Your password*" required="required" data-validation-required-message="Please enter your valid password." />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    
                                </div>
                            </div>
                            <div class="ml-5">
                                <div id="success"></div>
                                <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Sign In</button>
                            </div>
                                
                            
                        </form>
                    </div>
                </section>

            </div>
        );
    }
}