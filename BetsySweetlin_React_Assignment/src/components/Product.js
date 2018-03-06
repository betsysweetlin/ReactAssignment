import React, { Component } from "react";
import ProductList from "./ProductList"
import { Link } from 'react-router-dom';
class Product extends Component {  

  handleClick = (event) => {
    var currentPage = Number(event.target.id);
    this.props.handlePageClick(currentPage);
  }

    //  displayProducts() {
    //     return this.props.products.map(p => (
    //         <ProductList product={p} deleteProduct={this.props.deleteProduct}
    //         onEdit = {this.props.onEdit}/>
     
    //     ));
    //   }
     

    render() {
      const todosPerPage = 10;
    const currentPage = this.props.current_page;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.props.products.slice(indexOfFirstTodo, indexOfLastTodo);
    const renderTodos = currentTodos.map((todo, index) => {
      return <ProductList product={todo} key={index} deleteProduct={this.props.deleteProduct}   onEdit = {this.props.onEdit}/>
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.products.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button className="paginationStyle"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </button>
      );
    });
        return (
            <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="panel panel-default panel-table">
                      <div class="panel-heading">
                        <div class="row">
                        <div> <h1>Product List</h1></div>
                          <div class="col col-xs-1 text-right">
                          <Link to="/addProduct">
                            <button type="button" class="btn btn-sm btn-primary btn-create">Add new product</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div class="panel-body">
                        <table class="table table-striped table-bordered table-list">
                          <thead>
                            <tr>
                                <th class="hidden-xs">ID</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Size</th>
                                <th>Brand</th>
                                <th>Action</th>
                            </tr> 
                          </thead>
                          <tbody className="row products-list">
                              {renderTodos}</tbody>
  
                        </table>
                    
                      </div>
                  
                    </div>
        
        </div></div>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
        </div>
          );
    }
}
export default Product;