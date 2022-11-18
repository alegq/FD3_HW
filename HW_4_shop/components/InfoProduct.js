import React from 'react';
import PropTypes from 'prop-types';

class InfoProduct extends React.Component {

    static propTypes = {
        code : PropTypes.number.isRequired ,
        price:  PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        mode: PropTypes.number.isRequired,
       // cbSelected: PropTypes.func.isRequired,
       // cbEditProduct: PropTypes.func.isRequired,
       // cbDeletProduct: PropTypes.func.isRequired,
       // selectedProductCode: PropTypes.number, // может быть null, пока ни один продукт не выбран
    };

    render() {
        console.log(this.props.mode)
        return (
            <div className={'info'}>
                {(this.props.mode == 1) &&
                    <div className={'mode1'}>
                        <h3>{'Product ' + this.props.code}</h3>
                        {'Product ' + this.props.code}
                        <br/>
                        {'Price: ' + this.props.price}
                    </div>
                }

                {(this.props.mode == 2) &&
                <div className={'mode2'}>
                    <h3>{'Edit existing Product'}</h3>
                    {'ID: ' + this.props.code}
                    <br/>
                    {'ID: ' } <input type="text"/>
                    <br/>
                    {'Price: ' + this.props.price}
                    <br/>
                    {'quantity: ' + this.props.quantity}
                    <br/>
                    {'name: ' + this.props.name}
                </div>
                }

                {(this.props.mode == 3) &&
                <div className={'mode2'}>
                    <h3>{'Add new product'}</h3>
                    {'ID: ' + this.props.code}
                    <br/>
                    {'ID: ' } <input type="text"/>
                    <br/>
                    {'Price: '} <input type="text"/>
                    <br/>
                    {'quantity: '}<input type="text"/>
                    <br/>
                    {'name: '} <input type="text"/>
                </div>
                }


            </div>
        )

    }

}

export default InfoProduct;
