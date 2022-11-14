var Shop = React.createClass({

  displayName: 'Shop',

  propTypes: {
    heading: React.PropTypes.string.isRequired,
    product:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
      })
    )
  },

  getInitialState: function() {
    return {
      selectedProductCode: null,
      productsArr: this.props.product.slice(0),
    };
  },

  productSelected: function(code) {
    console.log('выбран продукт с кодом '+code);
    this.setState( {selectedProductCode:code} );
  },

  productDelete: function(code) {
    console.log(' удален продукт с кодом '+code);
    this.setState( {productsArr:this.state.productsArr.filter(v => v.code!==code)} );
  },

  render: function() {

    var productsCode=this.state.productsArr.map(v =>
      React.createElement(Product, {key:v.code,code:v.code, text:v.text,
        count:v.count, url: v.url,
        price: v.price,
        cbSelected:this.productSelected,
        selectedProductCode:this.state.selectedProductCode,
        cbDeletProduct: this.productDelete} )
    );


    return React.DOM.div( {className:'Shop'},
      React.createElement(Heading, {heading:this.props.heading} ),
      React.DOM.table( {className:'tables'},
          React.DOM.tbody( {className:'tbod'},productsCode))
    );
  },

});