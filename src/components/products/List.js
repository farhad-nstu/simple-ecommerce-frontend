import React, { Component } from 'react';
import axios from 'axios';
import Header from './../../common/Header';
import { Link, Redirect } from "react-router-dom";

export default class List extends Component {

  state = {
    products: [],
  }

  componentDidMount(){
    axios.get('/api/products')
      .then(response => {
        this.setState({
          products: response.data
        })
      }).catch(error=> {

    });
  }

  delete (id) {

    axios.delete('/api/products/'+id)
    .then(response=> {
      console.log(response.data);
      var products = this.state.products;
      for(var i = 0; i < products.length; i++){
        if(products[i].id == id){
          products.splice(i,1);
          this.setState({products:products})
        }
      }
    })

  }

    render() {

        return (
          <div>  

            <Header />

            <section class="page-section" id="skill">
              <div class="container">

                <div class="nk-block">
                  <div class="card card-bordered card-stretch">
                    <div class="card-inner-group">
                      <Link className="p-2 btn btn-sm btn-success float-right" to="/add">Add New</Link>
                      <table class="datatable-init table">
                        <thead>
                          <tr>
                            <th class="font-weight-bold text-success">Picture</th>
                            <th class="font-weight-bold text-success">Title</th>
                            <th class="font-weight-bold text-success">Price</th>
                            <th class="font-weight-bold text-success">Quantity</th>
                            <th class="font-weight-bold text-success">Category</th>
                            <th class="font-weight-bold text-success">Description</th>
                            <th class="font-weight-bold text-success">Manage</th> 
                          </tr>
                        </thead>
                        <tbody>
                          { 
                            this.state.products.map(product => {
                              return (
                                <tr> 
                                  <td class="font-weight-bold">
                                    <img src={"http://127.0.0.1:8000/"+product.picture} width="100px" />
                                  </td>
                                  <td class="font-weight-bold">{product.name}</td> 
                                  <td class="font-weight-bold">{product.price}</td>
                                  <td class="font-weight-bold">{product.quantity}</td>
                                  <td class="font-weight-bold">{product.category.name}</td>
                                  <td class="font-weight-bold">{product.description}</td>
                                  <td class="font-weight-bold">
                                    <Link className="p-2 btn btn-sm btn-primary" to={"/edit/"+product.id}>Edit</Link>&nbsp;&nbsp;
                                    <Link className="p-2 btn btn-sm btn-danger" onClick={this.delete.bind(this,product.id)}>Delete</Link>
                                  </td>
                                </tr>
                              )
                            })
                          }              
                        </tbody>
                      </table>
                    </div>            
                  </div>
                </div>
              </div>
            </section>

          </div>
        );
    }
}