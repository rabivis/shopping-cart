import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {removeToCart} from '../actions/index';
import { Button } from 'react-bootstrap';


class RemoveToCart extends Component {

  constructor(props) {
    super(props)
    this.removeToCart = this.removeToCart.bind(this);
  }
  removeToCart(){
      const {product,activeCartItems} = this.props;
      this.props.removeToCart(activeCartItems,product);
  }
  render() {
      return (<Button onClick={() => this.removeToCart()} bsClass="btn btn-default">Remove</Button>);
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
export default connect(mapStateToProps, {removeToCart})(RemoveToCart);
