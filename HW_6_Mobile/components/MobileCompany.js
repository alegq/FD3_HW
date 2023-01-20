import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import {mobileEvents} from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

    static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        lastName: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        middleName: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })),
    };

    state = {
        clients: this.props.clients,
    };

    clientsConst = this.props.clients;

    componentDidMount = () => {
        mobileEvents.addListener('EDeliteClicked',this.deliteClient); // EventEmitter,   прослушиваем событие нажатие кнопки "Delete"
    };

    componentWillUnmount = () => {
        mobileEvents.removeListener('EDeliteClicked',this.deliteClient); // удалить прослушивание при удалении компанента
    };

    // удалить клиента
    deliteClient = (id) => {
        this.setState( {clients:this.state.clients.filter(v => v.id!==id)} ); // filter создает новый массив, тем самым вносит иммутабильные изменения
        this.clientsConst = this.state.clients.filter(v => v.id!==id);
    };
    //добавить клиента
    addClient = () => {
        let newClient={id:this.state.clients.length+100, lastName: "Иванов", firstName:"Иван", middleName:"Иванович", balance:0};
        this.setState({clients:[...this.state.clients,newClient]});
        this.clientsConst = [...this.state.clients,newClient];
    };

    //выести всех клиентов
    filterClient = () => {
        this.setState({clients:this.clientsConst});
    };

    prActiveFilter= (client) =>{
        this.setState({clients:this.clientsConst.filter(this.activeFilter)});
    }

    activeFilter= (client) =>{
       return client.balance >= 0;
    }

    prblockedFilter= (client) =>{
        this.setState({clients:this.clientsConst.filter(this.blockedFilter)});
    }

    blockedFilter= (client) =>{
        return client.balance < 0;
    }


    render() {

    console.log("MobileCompany render");

    const clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
          <input type="button" value="Все" onClick={this.filterClient} />
          <input type="button" value="Активные" onClick={this.prActiveFilter} />
          <input type="button" value="Заблокированные" onClick={this.prblockedFilter} />

          <table className={'tables'}>
            <tbody className='MobileCompanyClients'>
              {clientsCode}
            </tbody>
          </table>

          <input type="button" value="Добавить клиента" onClick={this.addClient} />
      </div>
    )
    ;

  }

}

export default MobileCompany;
