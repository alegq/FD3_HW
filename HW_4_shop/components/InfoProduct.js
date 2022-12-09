import React from 'react';
import PropTypes from 'prop-types';

class InfoProduct extends React.Component {

    static propTypes = {
        code : PropTypes.number.isRequired ,
        price:  PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        mode: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,

        cbAddProduct: PropTypes.func.isRequired,
        cbCancel: PropTypes.func.isRequired,
        cbButtDisabled: PropTypes.func.isRequired,
    };

    state = {
        checkPrice: 1,
        checkQuantity: 1,
        checkName: 1,
        checkURL: 1,

        pricePr: this.props.price,
        quantityPr: this.props.quantity,
        namePr: this.props.name,
        urlPr: this.props.url,
    };

    validPrice = (EO) => {
        this.props.cbButtDisabled()
        let priceNum = EO.target.value
        if ( !(isNaN(priceNum) || priceNum === '' || priceNum<=0 )  ) {
            this.setState({checkPrice: 1})
            this.setState({pricePr: priceNum})
        }else {
            this.setState({checkPrice: 0})
        }
    }

    validQuantity = (EO) => {
        this.props.cbButtDisabled()
        let quantityNum = EO.target.value
        if ( !(isNaN(quantityNum) || quantityNum === '' || quantityNum<=0 )  ) {
            this.setState({checkQuantity:1})
            this.setState({quantityPr:Number(quantityNum)})
        }else {
            this.setState({checkQuantity:0})
        }
    }

    validName = (EO) => {
        this.props.cbButtDisabled()
        let nameStr = EO.target.value
        if ( !(typeof nameStr !== 'string' || nameStr === '' )  ) {
            this.setState({checkName:1})
            this.setState({namePr:nameStr})
        }else {
            this.setState({checkName:0})
        }
    }
    validURL = (EO) => {
        this.props.cbButtDisabled()
        let urlHttp = EO.target.value
        if ( urlHttp.substring(0,8)==='https://' ) {
            this.setState({checkURL: 1})
            this.setState({urlPr: urlHttp})
        }else {
            this.setState({checkURL: 0})
        }
    }

    add = () => {
        this.props.cbAddProduct(
            {"text":this.state.namePr,"code":this.props.code,
                "price":this.state.pricePr,"count":this.state.quantityPr, "url": this.state.urlPr}
        )
        this.props.cbCancel()
    }

    cancel = () => {
        this.props.cbCancel()
    }

    render() {
    //console.log(this.props.mode)
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

                {'Price: '}  <input type="text" defaultValue={this.props.price} onChange={this.validPrice}/>
                {
                    (!this.state.checkPrice) &&
                    <span className={'error'}>Please, fill the field. Value must be a rational greater than 0</span>
                }
                <br/>

                {'Quantity: '}  <input type="text" defaultValue={this.props.quantity} onChange={this.validQuantity}/>
                {
                    (!this.state.checkQuantity) &&
                    <span className={'error'}>Please, fill the field. Value must be a positive integer</span>
                }
                <br/>

                {'Name: ' } <input type="text" defaultValue={this.props.name} onChange={this.validName}/>
                {
                    (!this.state.checkName) &&
                    <span className={'error'}>Please, fill the field. Value must be a string</span>
                }
                <br/>
                {'Url: ' } <input type="text" defaultValue={this.props.url} onChange={this.validURL}/>
                {
                    (!this.state.checkURL) &&
                    <span className={'error'}>Please, fill the field. Value must be a valid URL</span>
                }
                <br/>
                <input type="button" value={'Save'} onClick={this.add}
                       disabled={!(this.state.checkPrice&&this.state.checkQuantity&&
                           this.state.checkName &&this.state.checkURL)}
                />
                <input type="button" value={'Cancel'} onClick={this.cancel}/>
            </div>
            }

            {/*{(this.props.mode == 3) &&*/}
            {/*<div className={'mode2'}>*/}
            {/*    <h3>{'Add new product'}</h3>*/}
            {/*    {'ID: ' + this.props.code}*/}
            {/*    <br/>*/}
            {/*    {'ID: ' } <input type="text"/>*/}
            {/*    <br/>*/}
            {/*    {'Price: '} <input type="text"/>*/}
            {/*    <br/>*/}
            {/*    {'quantity: '}<input type="text"/>*/}
            {/*    <br/>*/}
            {/*    {'name: '} <input type="text"/>*/}
            {/*</div>*/}
            {/*}*/}


        </div>
    )

}

}

export default InfoProduct;
