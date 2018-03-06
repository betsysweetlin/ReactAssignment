import React, { Component } from "react";
import Product from "./Product";
import {Link} from "react-router-dom";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render()
  {
    return (
        <tr className="table-align">
          <td>{this.props.product.id}</td>
          <td>{this.props.product.productName}</td>
          <td>{this.props.product.price}</td>
          <td>{this.props.product.size}</td>
          <td>{this.props.product.brand}</td>
         <td><Link to="/editProduct"><button className="btn btn-sm btn-primary btn-create" onClick={() => { this.props.onEdit(this.props.product) }}>EDIT</button></Link></td> 
          <td><button className=" btn btn-sm btn-primary btn-danger" onClick={()=> {this.props.deleteProduct(this.props.product.id)}}>DELETE</button></td>
        </tr>
     
    )
  }
}

export default ProductList;
