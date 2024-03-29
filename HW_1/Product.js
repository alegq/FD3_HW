﻿var Product = React.createClass({

  displayName: 'Product',

  propTypes: {
    count: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
  },

  render: function() {

    return React.DOM.div( {className:'Product'},
      React.DOM.span({className:'Count'},'наличие:'+this.props.count),
      React.DOM.span({className:'Text'},this.props.text),
      React.DOM.img({className:'Imgg', src: this.props.url}),
      React.DOM.span({className:'Price'},this.props.price,'$'),
    );
  },

});