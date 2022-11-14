import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './Heading.css';

class Heading extends React.Component {

  static propTypes = {
    heading: PropTypes.string.isRequired,
  };

  render() {
    return DOM.div( {className:'Heading'}, this.props.heading );
  }

}

export default Heading;