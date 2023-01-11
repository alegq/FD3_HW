import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Heading from './Heading';
import Product from './Product';
import InfoProduct from './InfoProduct';

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
        modeInfo: 0,                             //1-select 2-edit 3-new
    };

    productSelected = (code) => {
        console.log('выбран продукт с кодом '+code);
        this.setState( {selectedProductCode:code} );
        this.setState({modeInfo:1})
    };

    productEdit = (code) => {
        console.log('редактируется продукт с кодом '+code);
        this.setState({modeInfo:2})
    }

    productDelete = (code) => {
        console.log(' удален продукт с кодом '+code);
        this.setState( {productsArr:this.state.productsArr.filter(v => v.code!==code)} );
    };

    newpProduct = () => {
        console.log('создать новый продукт')
        this.setState({selectedProductCode:this.state.productsArr.length+1})
        this.setState({modeInfo:3})
    }

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

        var productEditInfo=this.state.productsArr.filter(v => (v.code==this.state.selectedProductCode))[0];

        return (
            <div className='Shop'>
                <Heading heading={this.props.heading}/>
                <table className={'tables'}>
                    <tbody className={'tbod'}>
                        {productsCode}
                    </tbody>
                </table>
                <input type="button" value={'New product'} onClick={this.newpProduct}/>

                {
                    (this.state.modeInfo )&&
                    <InfoProduct code={this.state.selectedProductCode} price={productEditInfo.price}
                                 name={productEditInfo.text} url={productEditInfo.url} quantity={productEditInfo.count}
                                 mode={this.state.modeInfo}
                    />

                }

            </div>
        )

    }
};

export default Shop;