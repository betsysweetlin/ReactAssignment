import React, { Component } from "react";
import { Link } from 'react-router-dom';
class AddProduct extends Component {

    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
    e.preventDefault();
    const formData = {};
    for (const field in this.refs) {
    formData[field] = this.refs[field].value;
    }
    this.props.addProduct(formData);
    }
    render() {
    return (
   
    <div class="form-group col-xs-6">
    <form onSubmit={this.handleSubmit} >
    <label>ID</label>
    <input class="form-control" ref="id" type='text'/>
    <label>ProductName</label> <input class="form-control" ref="productName" type='text'/>
    <label>Price</label> <input class="form-control" ref="price" type='text'/>
    <label>Size</label> <input class="form-control" ref="size" type='text'/>
    <label>Brand</label> <input class="form-control" ref="brand" type='text'/><br/>
    <input type="submit" className="btn btn-primary" value="Submit"/><br/><br/>
    </form>
    {/* <Link to="/"><button >BACK</button></Link> */}
    </div>
    
    );
    }
    }
    export default AddProduct;
    