import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addToCart} from '../actions/index';
import { Button } from 'react-bootstrap';


class AddToCartButton extends Component {

  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart(){
      const {product,activeCartItems} = this.props;
      this.props.addToCart(activeCartItems,product);
  }
  render() {
      return (<Button onClick={() => this.addToCart()} bsClass="btn btn-default">Add to Cart</Button>);
  }
}

// Get apps state and pass it as props to UserList
function mapStateToProps(state) {
    return {
        activeCartItems: state.activeCartItems
    };
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, {addToCart})(AddToCartButton);
