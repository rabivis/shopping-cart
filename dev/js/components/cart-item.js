import React, {Component} from 'react';
import RemoveToCart from '../containers/remove-to-cart';

export default class CartItem extends Component {
  render() {
      const {product} = this.props;
      return (
        <li >
            <div className="product-name">{product.productName}</div>
            <div><RemoveToCart product={product}/></div>
        </li>
      );
  }
}