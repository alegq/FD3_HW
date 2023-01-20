import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let clientsArr=[
  {id:100, lastName: "Иванов", firstName:"Иван", middleName:"Иванович", balance:200},
  {id:101, lastName: "Сидоров", firstName:"Сидор", middleName:"Сидорович", balance:-4},
  {id:102, lastName: "Петров", firstName:"Петр", middleName:"Петрович", balance:180},
  {id:103, lastName: "Григорьев", firstName:"Григорий", middleName:"Григорьевич", balance:220},
];

ReactDOM.render(
  <MobileCompany 
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

