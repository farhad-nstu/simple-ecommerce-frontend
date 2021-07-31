import React, { Component } from 'react';
import axios from 'axios';
import Header from './../../common/Header';
import { Link, Redirect } from "react-router-dom";

export default class Education extends Component {

  state = {
    categories: [],
  }

  componentDidMount(){
    axios.get('/api/category')
      .then(response => {
        this.setState({
          categories: response.data
        })
      }).catch(error=> {

    });
  }

  delete_category (id) {

    axios.delete('/api/category/'+id)
    .then(response=> {
      console.log(response.data);
      var categories = this.state.categories;
      for(var i = 0; i < categories.length; i++){
        if(categories[i].id == id){
          categories.splice(i,1);
          this.setState({categories:categories})
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
                      <Link className="p-2 btn btn-sm btn-success float-right" to="/add-category">Add New</Link>
                      <table class="datatable-init table">
                        <thead>
                          <tr>
                            <th class="font-weight-bold text-success">Title</th>
                            <th class="font-weight-bold text-success">Manage</th> 
                          </tr>
                        </thead>
                        <tbody>
                          { 
                            this.state.categories.map(category => {
                              return (
                                <tr> 
                                  <td class="font-weight-bold">{category.name}</td> 
                                  <td class="font-weight-bold">
                                    <Link className="p-2 btn btn-sm btn-primary" to={"/edit-category/"+category.id}>Edit</Link>&nbsp;&nbsp;
                                    <Link className="p-2 btn btn-sm btn-danger"  onClick={this.delete_category.bind(this,category.id)}>Delete</Link>
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