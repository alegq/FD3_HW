import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

    static propTypes = {
        //colors: PropTypes.string.array,
    };

    render() {
        var res = this.props.children;
        for (let i=0; i<this.props.colors.length; i++){
            res=<div style={{border:"dashed 1px "+this.props.colors[i],padding:"10px"}}>
                {res}
                 </div>
        }

        return (
            res
        );
    }
}

export default RainbowFrame;