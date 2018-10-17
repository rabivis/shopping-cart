import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CartItem from '../components/cart-item';


class CartList extends Component {

  renderList() {
    let {activeCartItems} = this.props;
    if(activeCartItems == null){
        activeCartItems = [];
    }
    if(activeCartItems.length == 0){
      return(<li>Your Shopping Cart is empty</li>);
    }
    return activeCartItems.map((product,key) => {
        if(product.isPublished === 'true'){
            return (
            <CartItem product={product} key={key}/>
        );
        } 
    });
  }

  render() {
      return (
        <div className="col-md-4 col-sm-6">
          <h4>Shopping cart</h4>
          <ul className="list-group">
              {this.renderList()}
          </ul>
        </div>
      );
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
export default connect(mapStateToProps, null)(CartList);
