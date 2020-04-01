import { EventEmitter } from '../EventEmitter';

class InputMaskView extends EventEmitter {
    constructor() {
      super();

      this.input = {};
      this.maskedInputs = document.querySelectorAll("[data-mask]");
        for (var index = 0; index < this.maskedInputs.length; index++) {
            this.maskedInputs[index].addEventListener('input', this.showChanges.bind(this));
        }
    }
  
    showChanges(event) {
        this.input = event.target;
        const obj = { value: this.input.value,
            mask: this.input.dataset.mask};

      this.emit('changeItemMasc', obj);
    }

    show(data) {
        this.input.value = data;
    }
}

export default InputMaskView;