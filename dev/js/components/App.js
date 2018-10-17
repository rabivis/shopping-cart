import React from 'react';
import CartList from '../containers/cart-list';
import ProductList from '../containers/product-list';

require('../../css/style.css');

const App = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <ProductList />
            <CartList />
          </div>
        </div>
      </div>
    </div>
    <br/>
   </div>
);

export default App;
