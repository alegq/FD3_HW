import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import {mobileEvents} from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

    static propTypes = {
    name: PropTypes.string.isRequired,
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
        name: this.props.name,
        clients: this.props.clients,
    };

    componentDidMount = () => {
        mobileEvents.addListener('EDeliteClicked',this.deliteClient);
       // voteEvents.addListener('EFreeAnswerTextChanged',this.freeAnswerTextChanged);
    };

    componentWillUnmount = () => {
        mobileEvents.removeListener('EDeliteClicked',this.deliteClient);
       // voteEvents.removeListener('EFreeAnswerTextChanged',this.freeAnswerTextChanged);
    };

    deliteClient = (id) => {
        console.log('cсобытие '+id);
        this.setState( {clients:this.state.clients.filter(v => v.id!==id)} );
    };

    setName1 = () => {
    this.setState({name:'МТС'});
    };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  setBalance = (clientId,newBalance) => {
    let newClients=this.state.clients;
    newClients.forEach( c => {
      if ( c.id==clientId )
        c.balance=newBalance;
    } );
    this.setState({clients:newClients});
  };

  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };

    addClient = () => {
        let newClient={id:this.state.clients.length+100, lastName: "Иванов", firstName:"Иван", middleName:"Иванович", balance:0};
        this.setState({clients:[...this.state.clients,newClient]});
    };

    filterClient = () => {
        this.setState({clients:this.props.clients});
    };

    prActiveFilter= (client) =>{
        this.setState({clients:this.state.clients.filter(this.activeFilter)});
    }

    activeFilter= (client) =>{
       return client.balance >= 0;
    }

    prblockedFilter= (client) =>{
        this.setState({clients:this.state.clients.filter(this.blockedFilter)});
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
          <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
          <table className={'tables'}>
            <tbody className='MobileCompanyClients'>
              {clientsCode}
            </tbody>
          </table>

          <input type="button" value="Добавить клиента" onClick={this.addClient} />
        {/*<input type="button" value="Сидоров=250" onClick={this.setBalance2} />*/}
      </div>
    )
    ;

  }

}

export default MobileCompany;
