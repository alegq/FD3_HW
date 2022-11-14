import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './Shop.css';

import Heading from './Heading';
import Product from './Product';

class Shop extends React.Component {

  static propTypes = {
    heading: PropTypes.string.isRequired,
    product:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    )
  };

  state = {
      selectedProductCode: null,
      productsArr: this.props.product.slice(0),
  };

  productSelected = (code) => {
    console.log('выбран продукт с кодом '+code);
    this.setState( {selectedProductCode:code} );
  };

  productDelete = (code) => {
    console.log(' удален продукт с кодом '+code);
    this.setState( {productsArr:this.state.productsArr.filter(v => v.code!==code)} );
  };

  render() {

    var productsCode=this.state.productsArr.map(v =>
      React.createElement(Product, {key:v.code,code:v.code, text:v.text,
        count:v.count, url: v.url,
        price: v.price,
        cbSelected:this.productSelected,
        selectedProductCode:this.state.selectedProductCode,
        cbDeletProduct: this.productDelete} )
    );


    return DOM.div( {className:'Shop'},
      React.createElement(Heading, {heading:this.props.heading} ),
      DOM.table( {className:'tables'},
          DOM.tbody( {className:'tbod'},productsCode))
    );
  }
};

export default Shop;