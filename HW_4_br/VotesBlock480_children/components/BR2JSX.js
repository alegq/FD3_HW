import React from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {

    static propTypes = {
        color: PropTypes.string.isRequired,
        text : PropTypes.string.isRequired,
    };

    render() {
        let  textRip =this.props.text.split((/<br ?\/?>/));
        var  textJsx =[]
        for (let i = 0; i<textRip.length; i++) {
            textJsx.push(textRip[i], <br/>)
        }
        console.log(textJsx)
        return (
            <div style={{border:"dashed 1px "+this.props.color,padding:"10px"}}>
                {textJsx}
            </div>

        );
    }

}

export default BR2JSX;