var products = require('json!../../../product-data.json');
/**
 * Action for set default product to reducer.
 */
export const getProductList = () => {
  return (dispatch) => {
      dispatch({type: 'DEFAULT_PRODUCT_LIST',payload: products});
    }
}
/**
 * Add product to activeCartItems.
 */
export const addToCart = (activeCartItems,product) => {
    if(activeCartItems == null){
        activeCartItems = [];
    }
    const newCartItems = [...activeCartItems,product];
    return (dispatch) => {
      dispatch({type: 'ACTIVE_CART_ITEMS',payload: newCartItems});
    }
};
/**
 * Remove product to activeCartItems.
 */
export const removeToCart = (activeCartItems,product) => {
    const filteredItems = activeCartItems.filter(item => item !== product)
    return (dispatch) => {
      dispatch({type: 'ACTIVE_CART_ITEMS',payload: filteredItems});
    }
}




