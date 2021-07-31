import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../components/Login';
import Register from '../components/Register';
import List from '.././components/products/List';
import Add from '.././components/products/Add';
import Edit from '.././components/products/Edit';
import Protected from '../components/Protected';
import Home from '../components/Home';
import Profile from '../components/Profile';
import CategoryList from '.././components/categories/CategoryList';
import AddCategory from '.././components/categories/AddCategory';
import EditCategory from '.././components/categories/EditCategory';


function App () {


    return (
        <div className="container-fluid">

        	<Router>

        		<Route exact path="/login">
        			<Login />
        		</Route>

        		<Route exact path="/register">
        			<Register />
        		</Route>

                <Route exact path="/categories">
                    <Protected Cmp={CategoryList} />
                </Route>

                <Route exact path="/add-category">
                    <Protected Cmp={AddCategory} />
                </Route>

                <Route exact path="/edit-category/:id">
                    <Protected Cmp={EditCategory} />
                </Route>

                <Route exact path="/products">
                    <Protected Cmp={List} />
                </Route>

        		<Route exact path="/add">
        			<Protected Cmp={Add} />
        		</Route>

        		<Route exact path="/edit/:id">
        			<Protected Cmp={Edit} />
        		</Route>

        		<Route exact path="/">
        			<Home />
        		</Route>

                <Route exact path="/profile">
                    <Protected Cmp={Profile} />
                </Route>

        	</Router>
            
        </div>

    );
}

export default App;