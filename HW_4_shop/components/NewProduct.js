import React from 'react';
import PropTypes from 'prop-types';
import './NewProduct.css';

class NewProduct extends React.Component {

    static propTypes = {
        code : PropTypes.number.isRequired ,
        cbAddProduct: PropTypes.func.isRequired,
        cbCancel: PropTypes.func.isRequired,
        //price:  PropTypes.number.isRequired,
        //quantity: PropTypes.number.isRequired,
        //name: PropTypes.string.isRequired,
        //mode: PropTypes.number.isRequired,
        // cbSelected: PropTypes.func.isRequired,
        // cbEditProduct: PropTypes.func.isRequired,
        // cbDeletProduct: PropTypes.func.isRequired,
        // selectedProductCode: PropTypes.number, // может быть null, пока ни один продукт не выбран
    };

    state = {
        checkPrice: 0,
        checkQuantity: 0,
        checkName: 0,
        checkURL: 0,

        pricePr: null,
        quantityPr: null,
        namePr: null,
        urlPr: null,

        // selectedProductCode: null,
        // productsArr: this.props.product.slice(0),
        // modeInfo: null,                             //1-select 2-edit 3-new
        // selectedNewProduct: null,
    };

    add = () => {
       console.log('add')
        this.props.cbAddProduct(
            {"text":this.state.namePr,"code":this.props.code,
            "price":this.state.pricePr,"count":this.state.quantityPr, "url": this.state.urlPr}
        )
        this.props.cbCancel()
    }

    cancel = () => {
        this.props.cbCancel()
    }

    validPrice = (EO) => {
        let priceNum = EO.target.value
        if ( !(isNaN(priceNum) || priceNum === '' || priceNum<=0 )  ) {
            this.setState({checkPrice: 1})
            this.setState({pricePr: priceNum})
        }else {
            this.setState({checkPrice: 0})
        }
    }

    validQuantity = (EO) => {
        let quantityNum = EO.target.value
        if ( !(isNaN(quantityNum) || quantityNum === '' || quantityNum<=0 )  ) {
            this.setState({checkQuantity:1})
            this.setState({quantityPr:Number(quantityNum)})
        }else {
            this.setState({checkQuantity:0})
        }
    }

    validName = (EO) => {
        let nameStr = EO.target.value
        if ( !(typeof nameStr !== 'string' || nameStr === '' )  ) {
            this.setState({checkName:1})
            this.setState({namePr:nameStr})
        }else {
            this.setState({checkName:0})
        }
    }
    validURL = (EO) => {
        let urlHttp = EO.target.value
        if ( urlHttp.substring(0,8)==='https://' ) {
            this.setState({checkURL: 1})
            this.setState({urlPr: urlHttp})
        }else {
            this.setState({checkURL: 0})
        }
    }

    render() {
        return (
                <div className={'newProd'}>
                    <h3>{'Add new product'}</h3>
                    {'ID: ' + this.props.code}
                    <br/>

                    {'Price: '} <input type="text" onChange={this.validPrice}/>
                    {
                        (!this.state.checkPrice) &&
                        <span className={'error'}>Please, fill the field. Value must be a rational greater than 0</span>
                    }
                    <br/>

                    {'quantity: '}<input type="text" onChange={this.validQuantity}/>
                    {
                        (!this.state.checkQuantity) &&
                        <span className={'error'}>Please, fill the field. Value must be a positive integer</span>
                    }
                    <br/>

                    {'name: '} <input type="text" onChange={this.validName}/>
                    {
                        (!this.state.checkName) &&
                        <span className={'error'}>Please, fill the field. Value must be a string</span>
                    }
                    <br/>

                    {'URL: '} <input type="text" onChange={this.validURL}/>
                    {   (!this.state.checkURL) &&
                        <span className={'error'}>Please, fill the field. Value must be a valid URL</span>
                    }
                    <br/>

                    <input type="button" value={'Add'} onClick={this.add}
                           disabled={!(this.state.checkPrice&&this.state.checkQuantity&&
                                     this.state.checkName &&this.state.checkURL)}/>
                    <input type="button" value={'Cancel'} onClick={this.cancel}/>
                </div>

        )

    }

}

export default NewProduct;
