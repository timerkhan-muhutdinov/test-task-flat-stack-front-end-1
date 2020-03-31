import { EventEmitter } from '../EventEmitter';
import { countryList } from '../data/countryList';

class FormModel extends EventEmitter {
    constructor() {
        super();                
        console.log("FormModel");
        this.currentTab = -1;
    }

    nextTab(){   
        console.log("FormModel nextTab");  
        return ++this.currentTab;
    }
}

export default FormModel;