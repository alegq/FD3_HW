import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './Product.css';

class Product extends React.Component {

   static  propTypes = {
    code: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    cbSelected: PropTypes.func.isRequired,
    cbDeletProduct: PropTypes.func.isRequired,
    selectedProductCode: PropTypes.number, // может быть null, пока ни один продукт не выбран
  };

  productClicked = () => {
      this.props.cbSelected(this.props.code);
  };

  deleteProduct = (EO) => {
    this.props.cbDeletProduct(this.props.code);
    EO.stopPropagation()
  };

  render() {

    return DOM.tr({className:'Product', onClick:this.productClicked,
                style:{backgroundColor:(this.props.selectedProductCode===this.props.code)?'red':'white'}},
              DOM.td({className:'tdProduct'},
                  DOM.span({className:'Text'},this.props.text)),

              DOM.td({className:'tdProduct'},
                  DOM.img({className:'Imgg', src: this.props.url})),

             DOM.td({className:'tdProduct'},
                  DOM.span({className:'Price'},this.props.price,'$')),

              DOM.td({className:'tdProduct'},
                  DOM.span({className:'Count'},this.props.count)),

              DOM.td({className:'tdProduct'},
                  DOM.input( {type:'button',value:'Delete',onClick:this.deleteProduct} )),
           );

  };

};


export default Product;