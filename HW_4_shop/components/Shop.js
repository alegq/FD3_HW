import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Heading from './Heading';
import Product from './Product';
import InfoProduct from './InfoProduct';
import NewProduct from './NewProduct';

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
        modeInfo: null,                             //1-select 2-edit 3-new
        selectedNewProduct: null,
        buttDisabled:0,
        ignoreSelect:0,
    };

    productSelected = (code) => {
        if (!this.state.ignoreSelect){
            //console.log('выбран продукт с кодом '+code);
            this.setState( {selectedProductCode:code} );
            this.setState({modeInfo:1})
        }
    };

    productEdit = (code) => {
       // console.log('редактируется продукт с кодом '+code);
        this.setState( {selectedProductCode:code} );
        this.setState({modeInfo:2})
    }

    productDelete = (code) => {
        //console.log(' удален продукт с кодом '+code);
        this.setState( {productsArr:this.state.productsArr.filter(v => v.code!==code)} );
        if (code==this.state.selectedProductCode){
            this.setState({modeInfo:null})
        }

    };
    productAdd = (prod) => {
        this.setState({buttDisabled:0});
        this.setState({ignoreSelect:0})
        var pr = this.state.productsArr
        pr[prod.code-1]=prod
        this.setState({productsArr:pr});
    }


    newpProduct = () => {
        this.setState({selectedNewProduct:1})
        this.setState({modeInfo:null})
        this.setState({selectedProductCode:null})
        this.setState({buttDisabled:1})
        this.setState({ignoreSelect:1})

    }

    cancelForm = () => {
        this.setState({selectedNewProduct:null})
        this.setState({modeInfo:null})
        this.setState({buttDisabled:0});
        this.setState({ignoreSelect:0})
    }

    ButtDisabled = () => {
        this.setState({buttDisabled:1})
        this.setState({ignoreSelect:1})


    }

    render() {
       // console.log(this.state.productsArr)
        var productsCode=this.state.productsArr.map(v =>
            <Product key = {v.code} code = {v.code} text={v.text}
                     count={v.count} url={v.url}
                     price={v.price}
                     buttDisabled={this.state.buttDisabled}
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
                {
<<<<<<< HEAD
                    (this.state.modeInfo )&&
                    <InfoProduct code={this.state.selectedProductCode} price={productEditInfo.price}
                                 name={productEditInfo.text} url={productEditInfo.url} quantity={productEditInfo.count}
                                 mode={this.state.modeInfo}
                    />

=======
                    (!this.state.selectedNewProduct && this.state.modeInfo !== 2) &&
                    <input type="button" value={'New product'} onClick={this.newpProduct}/>
>>>>>>> 1900586fb093145316437d219aab348166d28d82
                }


                {
                    (this.state.modeInfo )&&
                    <InfoProduct code={this.state.selectedProductCode} price={productEditInfo.price}
                                 name={productEditInfo.text} url={productEditInfo.url} quantity={productEditInfo.count}
                                 mode={this.state.modeInfo}  cbAddProduct={this.productAdd} cbCancel={this.cancelForm}
                                 cbButtDisabled={this.ButtDisabled}
                    />
                }
                {
                    (this.state.selectedNewProduct) && (!this.state.modeInfo )&&
                    <NewProduct code={this.state.productsArr.length + 1} cbAddProduct={this.productAdd} cbCancel={this.cancelForm}/>
                }
            </div>
        )

    }
};

export default Shop;