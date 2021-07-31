import React, { Component } from 'react';
import {BrowserRouter as Link, Redirect} from "react-router-dom";
import axios from 'axios';
import Header from './../common/Header';


export default class Register extends Component {

    state= {
        name: "",
        email: "",
        password: "",
        registered: false,
        message: ""
    }

    formHandler = (e) => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }

        axios.post(`/api/register`, data)
        .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data));
            this.setState({
                registered: true
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
                            <h2 class="section-heading text-uppercase">Register Now</h2>
                        </div>
                        <form onSubmit={this.formHandler} id="contactForm" name="sentMessage">

                            <div class="row align-items-stretch mb-5">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({name: e.target.value})}} class="form-control" type="text" placeholder="Your Name *" required="required"/>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({email: e.target.value})}} class="form-control" type="email" placeholder="Your Email *" required="required"/>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input onChange={(e) => {this.setState({password: e.target.value})}} class="form-control" type="password" placeholder="Your password*" required="required" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <div id="success"></div>
                                <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>
        );
    }
}