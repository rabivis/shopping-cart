import React, {Component} from 'react';
import AddToCartButton from '../containers/add-to-cart';

export default class ProductItem extends Component {
  render() {
      const {product} = this.props;
      return (
        <div className="col-md-4 col-xs-6">
            <div className="product-grid">
                <div className="product-name">{product.productName}</div>
                <div className="product-image"><img src={product.productImage} alt={product.productName} /></div>
                <div className="product-price">${product.price}</div>
                <div><AddToCartButton product={product}/></div>
            </div>
        </div>
      );
  }
}