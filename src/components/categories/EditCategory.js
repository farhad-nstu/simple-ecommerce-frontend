import React, { Component } from 'react';
import {Redirect, withRouter} from "react-router-dom"; // Should have use withRouter in export default
import axios from 'axios';
import Header from './../../common/Header';

class EditCategory extends Component {

  // constructor(props)
  // {
  //   super(props);
  //   // alert(this.props.match.params.id);
  //   this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  //   this.state={
  //     name: '',
  //     alert_message: ''
  //   }
  // }

  state = {
    name: '',
    alert_message: false,
  }

  componentDidMount() {

      axios.get('/api/category/'+this.props.match.params.id)  /// Params pawar jonno withRouter use kora lage
      .then(response=> {
        this.setState({name: response.data.name});
      });
  }

  formHandler = (e) => {

    e.preventDefault();

    // const data = {
    //   name: this.state.name,
    // }

    const data = new FormData();

    data.append('name', this.state.name);
    data.append('_method', 'PUT');

    axios.post('/api/category/'+this.props.match.params.id, data)
    .then(response=> {
      console.log(response.data);
      this.setState({alert_message: true})
    })
  }

  render() {

    if(this.state.alert_message){
        return <Redirect to="/categories" />
    }

    return (
      <div>
        <Header />
        <section>
          <div class="container">

            <form onSubmit={this.formHandler} enctype="multipart/form-data">
              <div className="form-group">
                <label>Category</label>
                <input type="text" 
                  className="form-control" 
                  value={this.state.name}
                  onChange={(e) => {this.setState({name: e.target.value})}}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        </section>
      </div>
    );
  }
}
export default withRouter(EditCategory);


