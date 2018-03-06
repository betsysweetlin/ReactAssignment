import React, { Component } from "react";
import ProductList from "./components/ProductList";
import EditProduct from "./components/editProduct";
import "./App.css";
import { Route, Switch,Redirect} from "react-router-dom";
import Product from "./components/Product";
import { BrowserRouter as Router } from "react-router-dom";
 import { connect } from "react-redux";
 import { bindActionCreators } from "redux";
 import * as productActions from "./actionCreators/products";
 import { withRouter } from "react-router-dom";
 import AddProduct from "./components/addProduct";
import editProduct from "./components/editProduct";

  class App extends Component {
    constructor(props) {
      super(props);
    }
  
    componentWillMount() {
      this.props.actions.getProducts();
    }
   
    handleAddProduct=(formData) =>{
      this.props.actions.addProduct(formData);
       window.location.href = "/";
    }

    handleEdit = (prod) => {
      this.props.actions.editProduct(prod);
    }

    handleEditChanges = (editItem) => {
      this.props.actions.editInputChange(editItem);
    }

    handleClickEdit = (editProducts) => {
      this.props.actions.editSuccessProduct(editProducts);
      window.location.href = "/";
    }

   handleDeleteProduct = (formData) => {
    if (window.confirm("Do you really want to delete?")) {
      this.props.actions.deleteProduct(formData);
      window.location.href = "/";
    }
    else {
      window.location.href = "/";
    }
  }
    handlePageClick = (current_page) => {
      this.props.actions.pagination(current_page);
    }
    render() {
      return (
      <div className="App">
      
     <Router>
     <Switch>
     <Route exact path="/" render={props => (
     <Product 
     products={this.props.products} deleteProduct={this.handleDeleteProduct} 
     addProduct = {this.handleAddProduct}
     onEdit={this.handleEdit}
     current_page={this.props.current_page}
     handlePageClick={this.handlePageClick}/>
     )}/> 
    <Route exact path="/addProduct" render={props => (
    <AddProduct addProduct = {this.handleAddProduct} /> 
     )}/> 
     <Route exact path="/editProduct" render={props => (
    <EditProduct  {...props}
    editProducts={this.props.editProd}
    onChangeEdit={this.handleEditChanges}
    onClickEdit={this.handleClickEdit} /> 
     )}/> 
    </Switch>
    </Router>
         
      </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
      products: state.products,
      editProd: state. editProduct,
      current_page: state.current_page

    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(productActions, dispatch)
    };
  }
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
  