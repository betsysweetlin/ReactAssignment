import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class EditProduct extends Component {
    handleEdit_Changes = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const editItem = {};
        editItem[name] = value;
       this.props.onChangeEdit(editItem); 
      }
  render() {
    return (
      <div class="form-group col-xs-6">
        <h1>EDIT PRODUCT</h1>
        <div><label>Product Name:</label>
          <input type="text" name="productName" onChange={(e) => { this.handleEdit_Changes(e) }}
            defaultValue = {this.props.editProducts.productName} class="form-control"/></div>
        <div><label>Price:</label>
          <input type="text" name="price" onChange={(e) => { this.handleEdit_Changes(e) }}
            defaultValue = {this.props.editProducts.price}class="form-control" /></div>
        <div ><label>Size:</label>
          <input type="text" name="size" onChange={(e) => { this.handleEdit_Changes(e) }}
            defaultValue = {this.props.editProducts.size}class="form-control" /></div>
        <div><label>Brand:</label>
          <input type="text" name="brand" onChange={(e) => { this.handleEdit_Changes(e) }}
           defaultValue = {this.props.editProducts.brand} class="form-control" /></div>
        <div>
          <button onClick={(e) => {this.props.onClickEdit(this.props.editProducts)}} className="btn btn-primary">SAVE</button>
          <Link to="/"><button className="btn btn-primary">BACK</button></Link>
        </div>
      </div>
    );
  }
}

export default EditProduct;
