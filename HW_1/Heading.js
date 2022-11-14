var Heading = React.createClass({

  displayName: 'Heading',

  propTypes: {
    heading: React.PropTypes.string.isRequired,
  },

  render: function() {
    return React.DOM.div( {className:'Heading'}, this.props.heading );
  },

});