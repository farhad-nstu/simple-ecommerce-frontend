import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import axios from 'axios';
import Header from './../../common/Header';


export default class AddCategory extends Component {
  state= {
    name: "",
    message: ''
  }

  formHandler = (e) => {

    e.preventDefault();
    const data = {
      name: this.state.name,
    }

    axios.post('/api/category', data)
    .then(response => {
      this.setState({ name: '' });
    })
  }


  render() {

    return (
      <div>   

        <Header />

        <section>
          <div class="container">

            <form onSubmit={this.formHandler} id="category_form">            

              <div class="row">
                <div class="col-md-6">

                  <div class="form-group">
                    <label class="col-sm-3">Title</label>
                    <div class="col-sm-9">
                      <input onChange={(e) => {this.setState({name: e.target.value})}} class="form-control" type="text" placeholder="Enter Category Title" required="required" />
                    </div>                   
                  </div>

                </div>
                <div class="col-md-6">

                </div>
              </div>
              <div class="ml-5">
                <div id="success"></div>
                <button class="btn btn-primary" id="sendMessageButton" type="submit">Save</button>
              </div>


            </form>
          </div>
        </section>

      </div>
    );
  }
}