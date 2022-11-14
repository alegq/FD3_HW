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

  render: function() {

    var productsCode=this.props.product.map(v =>
      React.createElement(Product, {key:v.code, text:v.text, count:v.count, url: v.url, price: v.price} )
    );
    return React.DOM.div( {className:'Shop'},
      React.createElement(Heading, {heading:this.props.heading} ),
      React.DOM.div( {className:'Answers'}, productsCode ),
    );
  },

});