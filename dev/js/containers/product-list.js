import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProductList} from '../actions/index'
import ProductItem from '../components/product-item';


class ProductList extends Component {
  
  componentDidMount(){
    this.props.getProductList();
  }

  renderList() {
    let {defaultProduct,activeCartItems} = this.props;
    if(defaultProduct == null){
        defaultProduct = [];
    }
    defaultProduct = defaultProduct.filter(item => item.isPublished !== 'false')
    
    defaultProduct = defaultProduct.filter(item => { 
      if(activeCartItems.length){
        return activeCartItems.filter((cartItem) => { return cartItem.productName == item.productName }).length == 0
      } else {
        return true;  
      }
    })
   
    if(defaultProduct.length == 0){
      return(<div className="col-md-8 product-grid">No item found to display</div>);
    }
    return defaultProduct.map((product,key) => <ProductItem product={product} key={key}/>);
  }

  render() {
      console.log('defaultProduct',this.props.defaultProduct)
      return (
        <div className="col-md-8 col-sm-6">
          <h4>Product List</h4>
          <div className="row">
              {this.renderList()}
          </div>
        </div>
      );
  }
}

// Get apps state and pass it as props to UserList
function mapStateToProps(state) {
    return {
        defaultProduct: state.defaultProduct,
        activeCartItems: state.activeCartItems
    };
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, {getProductList})(ProductList);
