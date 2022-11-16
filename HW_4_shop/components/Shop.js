import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Heading from './Heading';
import Product from './Product';

class Shop extends React.Component {

    static propTypes = {
        heading: PropTypes.string.isRequired,
        product:PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                count: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
            })
        )
    };

    state = {
        selectedProductCode: null,
        productsArr: this.props.product.slice(0),
    };

    productSelected = (code) => {
        console.log('выбран продукт с кодом '+code);
        this.setState( {selectedProductCode:code} );
    };

    productEdit = (code) => {
        console.log('редактируется продукт с кодом '+code);
    }

    productDelete = (code) => {
        console.log(' удален продукт с кодом '+code);
        this.setState( {productsArr:this.state.productsArr.filter(v => v.code!==code)} );
    };

    render() {

        var productsCode=this.state.productsArr.map(v =>
            <Product key = {v.code} code = {v.code} text={v.text}
                     count={v.count} url={v.url}
                     price={v.price}
                     cbSelected={this.productSelected}
                     selectedProductCode={this.state.selectedProductCode}
                     cbDeletProduct={this.productDelete}
                     cbEditProduct={this.productEdit}
            />
        );


        return (
            <div className='Shop'>
                <Heading heading={this.props.heading}/>
                <table className={'tables'}>
                    <tbody className={'tbod'}>
                        {productsCode}
                    </tbody>
                </table>
                <input type="button" value={'New product'} />

                {(this.state.selectedProductCode) &&
                <div className={'info'}>

                    {'Product' + this.state.selectedProductCode}
                    <br/>
                    {'product' + this.state.selectedProductCode}
                    <br/>
                    {'Price:' + ' потом'}


                </div>
                }
            </div>
        )

    }
};

export default Shop;