import {EventEmitter} from 'events';

let mobileEvents=new EventEmitter();
// в потоке mobileEvents будут все события, связанные с мобильным приложением
// событие "EDeliteClicked" - кликнут "Delete" клиента, его сэмиттирует MobileClient и примет MobileCompany
// лучше работать не с текстовыми литералами, а объявить переменные с соответствующими значениями
export {mobileEvents};
