import React from 'react';
import PropTypes from 'prop-types';
import {mobileEvents} from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      lastName: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      middleName: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  newLastNameRef = React.createRef();
  newFirstNameRef = React.createRef();
  newMiddleNameRef = React.createRef();
  newBalanceRef = React.createRef();
  newTextRef = React.createRef();

  state = {
    info: this.props.info,
    modeEdit: 0,
  };


  deliteClicked = (EO) => {
    mobileEvents.emit('EDeliteClicked',this.state.info.id); // при нажатии кнопки "Delete" создаем новое событие
  };
  // переключаемся в режи редоктирования
  editClient = () => {
    this.setState({modeEdit:1})
  };
  // при внесении изменений в любое поле в режиме редактирования, изменения вносятся в state
  changeInfo = () => {
    let info = this.state.info;
    let ltName = this.newLastNameRef.current.value
    let fsName = this.newFirstNameRef.current.value
    let mlName = this.newMiddleNameRef.current.value
    let balance = this.newBalanceRef.current.value
    info.lastName = ltName;
    info.firstName = fsName;
    info.middleName = mlName;
    info.balance = balance;
    this.setState({info:info})
  };

  // сохраняются изменения и выходим из режима редактирования
  saveEdit = () => {
    this.setState({modeEdit:0})
  };

  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    
    return (
    <tr className={'MobileClient'} onClick={this.productClicked}>

      <td className={'tdProduct'}>
        {
            (!this.state.modeEdit)
                ?<span className={'MobileClientFIO'}>{this.state.info.lastName}</span>
                :<input type="text" defaultValue={this.state.info.lastName} onChange={this.changeInfo} ref={this.newLastNameRef} />
        }
      </td>

      <td className={'tdProduct'}>
        {
          (!this.state.modeEdit)
              ?<span className={'MobileClientFIO'}>{this.state.info.firstName}</span>
              :<input type="text" defaultValue={this.state.info.firstName} onChange={this.changeInfo} ref={this.newFirstNameRef} />
        }
      </td>

      <td className={'tdProduct'}>
        {
          (!this.state.modeEdit)
              ?<span className={'MobileClientFIO'}>{this.state.info.middleName}</span>
              :<input type="text" defaultValue={this.state.info.middleName} onChange={this.changeInfo} ref={this.newMiddleNameRef} />
        }
      </td>

      <td className={'tdProduct'}>
        {
          (!this.state.modeEdit)
              ?<span className={'MobileClientBalance'}>{this.state.info.balance}</span>
              :<input type="text" defaultValue={this.state.info.balance} onChange={this.changeInfo} ref={this.newBalanceRef} />
        }
      </td>

      <td className={'tdProduct'}>
        <span className={'Activ'}>
         {
           (this.state.info.balance>=0) && <span style={{backgroundColor:'green'}}>active</span>
         }
         {
          (this.state.info.balance<0) && <span style={{backgroundColor:'red'}}>bloked</span>
         }
        </span>
      </td>

      <td className={'tdProduct'}>
        <input type={'button'} value={'Редактировать'} onClick={this.editClient}/>
      </td>

      <td className={'tdProduct'}>
        {
            (this.state.modeEdit!==0) &&
            <input type={'button'} value={'Save'} onClick={this.saveEdit}/>
        }
      </td>

      <td className={'tdProduct'} ref={this.newTextRef}>
        <input type={'button'} value={'Delete'} ref={this.newTextRef} onClick={this.deliteClicked}
        />
      </td>

    </tr>
    );

  }

}

export default MobileClient;
