import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    EDIT_PRODUCT,
    EDIT_INPUT_CHANGES,
    PAGINATION
  } from "../actionTypes/products";
  
  export default (
    prevState = {
      products: [],
      editProduct : {},
      current_page:1
    },
    action
  ) => {
    switch (action.type) {
      case GET_PRODUCTS:
        return {
          ...prevState
        };
      case GET_PRODUCTS_SUCCESS:
        return {
          ...prevState,
          products: action.products
        };
     case GET_PRODUCTS_SUCCESS:
        return {
          ...prevState,
          products: action.products
        };
    case EDIT_PRODUCT:
        return {
            ...prevState,
            editProduct: { ...action.products }
        }
    case EDIT_INPUT_CHANGES:
        return {
            ...prevState,
            editProduct: { ...prevState.editProduct,...action.editItem }
        }
        case PAGINATION:
      {
        return {
          ...prevState,
          current_page: action.current_page
        }
      }
        default:
        return prevState;
    }};