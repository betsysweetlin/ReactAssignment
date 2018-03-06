import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    DELETE_PRODUCT,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    EDIT_INPUT_CHANGES,
    EDIT_SUCCESS_PRODUCT,
    PAGINATION
  } from "../actionTypes/products";
  
  export function getProducts() {
    return {
      type: GET_PRODUCTS
    };
  }

  export function getProductsSuccess(products) {
    return {
      type: GET_PRODUCTS_SUCCESS,
      products
    };
  }
  
  export function getProductsFailure(error) {
    return {
      type: GET_PRODUCTS_FAILURE,
      error
    };
  }
    export function addProduct(products) {
      return {
        type: ADD_PRODUCT,
        products
      };
    }
    
    export function deleteProduct(products) {
      return {
        type: DELETE_PRODUCT,
        products
      };
    }
  
    export function editProduct(products) {
      return {
        type: EDIT_PRODUCT,
        products
      };
    }

    export function editInputChange(editItem) {
      return {
          type: EDIT_INPUT_CHANGES,
          editItem
      };
  }
  export function editSuccessProduct(editProducts) {
      return {
          type: EDIT_SUCCESS_PRODUCT,
          editProducts
      };
  }

  export function pagination(current_page) {
    return {
      type: PAGINATION,
      current_page
    }
  }
  
    
  