import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {

    static  propTypes = {
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        buttDisabled: PropTypes.number.isRequired,
        cbSelected: PropTypes.func.isRequired,
        cbEditProduct: PropTypes.func.isRequired,
        cbDeletProduct: PropTypes.func.isRequired,
        selectedProductCode: PropTypes.number, // может быть null, пока ни один продукт не выбран
    };

    productClicked = () => {
        this.props.cbSelected(this.props.code);
    };

    editProduct = (EO) =>{
        this.props.cbEditProduct(this.props.code);
        EO.stopPropagation()
    }

    deleteProduct = (EO) => {
        this.props.cbDeletProduct(this.props.code);
        EO.stopPropagation()
    };

    render() {
        return (
            <tr className={'Product'} onClick={this.productClicked}
                style={{backgroundColor:(this.props.selectedProductCode===this.props.code)?'red':'white'}}>

                <td className={'tdProduct'}>
                    <span className={'Text'}>{this.props.text}</span>
                </td>

                <td className={'tdProduct'}>
                    <img className={'Imgg'} src={ this.props.url}/>
                </td>

                <td className={'tdProduct'}>
                    <span className={'Price'}>{this.props.price}</span>
                </td>

                <td className={'tdProduct'}>
                    <span className={'Count'}> {this.props.count} </span>
                </td>

                <td className={'tdProduct'}>
                    <input type={'button'} value={'Edit'} disabled={this.props.buttDisabled} onClick={this.editProduct}/>
                </td>

                <td className={'tdProduct'}>
                    <input type={'button'} value={'Delete'} disabled={this.props.buttDisabled} onClick={this.deleteProduct}/>
                </td>
            </tr>

        )
    };

};


export default Product;