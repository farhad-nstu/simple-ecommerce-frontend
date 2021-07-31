import React, { Component } from 'react';
import {Redirect, Link} from "react-router-dom";
import axios from 'axios';
import Header from './../common/Header';

export default class Home extends Component {
  render() {

    return (
      <div>
      
        <Header />

        <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Ecommerce Dashboard</h2>
                    <h3 class="section-subheading text-muted">Success is the team sports</h3>
                </div>
                <div class="row">
                  
                </div>

            </div>
        </section>
        </div>
    );
  }
}