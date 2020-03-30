import { EventEmitter } from '../EventEmitter';

class InputMaskModel extends EventEmitter {
    constructor(state) {
        super();

        this.state = state;
    }

    getValue(){
        return this.state;
    }

    setValue(mask, value){
        const literalPattern = /[0\*]/;
        const numberPattern = /[0-9]/;
        let newValue = "";
        try {
            let maskLength = mask.length;
            let valueIndex = 0;
            let maskIndex = 0;
        
            for (; maskIndex < maskLength;) {
              if (maskIndex >= value.length) break;
        
              if (mask[maskIndex] === "0" && value[valueIndex].match(numberPattern) === null) break;
        
              while (mask[maskIndex].match(literalPattern) === null) {
                if (value[valueIndex] === mask[maskIndex]) break;
                newValue += mask[maskIndex++];
              }
              newValue += value[valueIndex++];
              maskIndex++;
            }
        
            this.state = newValue;

            return newValue;
          } catch (e) {
            console.log(e);
        }
    }
}

export default InputMaskModel;