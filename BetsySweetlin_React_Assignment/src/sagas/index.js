import {
    getProductsSuccess,
    getProductsFailure
  } from "../actionCreators/products";
  import { put, takeLatest } from "redux-saga/effects";
  import { GET_PRODUCTS,ADD_PRODUCT,DELETE_PRODUCT,EDIT_SUCCESS_PRODUCT } from "../actionTypes/products";
  
  function* getProducts() {
    let url = "http://localhost:4000/products";
    try {
      let products = yield fetch("http://localhost:4000/products").then(r =>
        r.json()
      );
  
      yield put(getProductsSuccess(products));
    } catch (error) {
      yield put(getProductsFailure(error));
    }
  }
  
  function* addProduct(action) {
    try {
        let products = yield fetch("http://localhost:4000/products", {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.products)
        }).then(result => result.json());

        yield put(getProductsSuccess(products));
    }
    catch (error) {
        yield put(getProductsFailure(error));
    }
}
function* deleteProduct(actions) {
    
  let products=yield fetch(`http://localhost:4000/products/${actions.products}`,{
    method:'DELETE'
  }).then(r=>r.json());
  let url = "http://localhost:4000/products";
    try {
      let products = yield fetch(url).then(r =>
        r.json()
      );
      yield put(getProductsSuccess(products));
    } catch (error) {
      yield put(getProductsFailure(error));
    }
  }
  function* editSuccessProduct(action) {
    console.log(action.editProducts)
    try {
        let product = yield fetch(`http://localhost:4000/products/${action.editProducts.id}`, {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.editProducts)
        }).then(result => result.json());
        yield put(getProductsSuccess(product));
    }
    catch (error) {
        yield put(getProductsFailure(error));
    }
}

  export function* getProductsWatcher()  {
    yield [takeLatest(GET_PRODUCTS, getProducts),
    takeLatest(DELETE_PRODUCT, deleteProduct),
    takeLatest(EDIT_SUCCESS_PRODUCT,editSuccessProduct),
    takeLatest(ADD_PRODUCT, addProduct)];
}
  