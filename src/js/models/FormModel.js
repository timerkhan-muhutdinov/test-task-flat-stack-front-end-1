import { EventEmitter } from '../EventEmitter';
import { countryList } from '../data/countryList';

class FormModel extends EventEmitter {
    constructor() {
        super();                
        
        this.currentTab = -1;
    }

    nextTab(){   
        console.log("FormModel nextTab");  
        return ++this.currentTab;
    }

    postForm(data){
        
        // тут должна быть отправка данных на сервер
        console.log(data);

        // типо получили ответ от сервера
        return {
            deliveryDate: new Date(),
            numberOrder: Math.floor(Math.random() * (10000000 - 100000)) + 100000
        }
    }
}

export default FormModel;