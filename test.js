import React, { Component } from 'react';
import { Redirect, withRouter } from "react-router-dom";
import axios from 'axios';
import Header from './../../common/Header';


class Edit extends Component {

  state= {
    name: '',
    price: '',
    quantity: '',
    description: '',
    picture: '',
    message: '',
    categories: [],
    category_id: '',
    alert_message: false,
  }

  componentDidMount(){

    axios.all([
      axios.get('/api/products/'+this.props.match.params.id), 
      axios.get('/api/category')
    ])
    .then(axios.spread((obj1, obj2) => {
      // Both requests are now complete
      this.setState({
        name: obj1.data.name,
        price: obj1.data.price,
        quantity: obj1.data.quantity,
        description: obj1.data.description,
        category_id: obj1.data.category.id,
        categories: obj2.data,
      });
    }));
  }

  formHandler = (e) => {

    e.preventDefault();

    // const data = {
    //   name: this.state.name,
    //   price: this.state.price,
    //   quantity: this.state.quantity,
    //   description: this.state.description,
    //   category_id: this.state.category_id,
    //   picture: this.state.picture.name,
    // }

    var formData = new FormData(form.current);
     
      // For image two data should be sent
      formData.append( 
        "picture", 
        this.state.picture, 
        this.state.picture.name 
      );

      formData.append('name', this.state.name);
      formData.append('price', this.state.price);
      formData.append('quantity', this.state.quantity);
      formData.append('description', this.state.description);
      formData.append('category_id', this.state.category_id);

      console.log(formData);

    axios.put('/api/products/'+this.props.match.params.id, formData)
    .then(response => {
      // this.setState({ 
      //  name: "",
      //  price: "",
      //  quantity: "",
      //  description: "",
      //  picture: "",
      //   alert_message: true,
      // });
    })
  }


  render() {

    // if(this.state.alert_message){
    //     return <Redirect to="/products" />
    // }

    return (
      <div>   

        <Header />

        <section>
          <div class="container">

            <form onSubmit={this.formHandler} id="product_form">            

              <div class="row">
                <div class="col-md-12">

                  <div class="form-group row">
                    <label class="col-sm-3">Title</label>
                    <div class="col-sm-9">
                      <input 
                        
                        onChange={(e) => {this.setState({name: e.target.value})}} 
                        class="form-control" 
                        type="text" 
                        placeholder="Enter Title" 
                        required="required" 
                        value={this.state.name}
                      />
                    </div>                   
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-3">Price</label>
                    <div class="col-sm-9">
                      <input 
                        
                        onChange={(e) => {this.setState({price: e.target.value})}} 
                        class="form-control" type="text" 
                        placeholder="Enter Price" required="required" 
                        value={this.state.price}
                      />
                    </div>                   
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-3">Quantity</label>
                    <div class="col-sm-9">
                      <input 
                        
                        onChange={(e) => {this.setState({quantity: e.target.value})}} 
                        class="form-control" type="number" 
                        placeholder="Enter Quantity" required="required" 
                        value={this.state.quantity}
                      />
                    </div>                   
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-3">Category</label>
                    <div class="col-sm-9">
                      <select onChange={(e) => {this.setState({category_id: e.target.value})}} class="form-control" value={this.state.category_id}>
                        <option>Select Category</option>
                        { 
                          this.state.categories.map(category => {
                            return (
                              <option value={category.id}>{category.name}</option>
                              
                            )
                          })
                        } 
                      </select>
                    </div>                   
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-3">Description</label>
                    <div class="col-sm-9">
                      <input 
                        
                        onChange={(e) => {this.setState({description: e.target.value})}} 
                        class="form-control" type="text" 
                        placeholder="Enter Description" required="required" 
                        value={this.state.description}
                      />
                    </div>                   
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-3">Picture</label>
                    <div class="col-sm-9">
                      <input 
                        onChange={(e) => {this.setState({picture: e.target.files[0]})}} 
                        class="form-control" type="file" 
                      />
                    </div>                   
                  </div>

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
export default withRouter(Edit);