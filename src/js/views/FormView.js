import { EventEmitter } from '../EventEmitter';

class FormView extends EventEmitter {
    constructor() {
        super();
        console.log("FormView");
        this.button = document.getElementById("button");
        this.tabs = document.getElementsByClassName("order-form__tab");
        this.multiSteps = document.getElementsByClassName("steps__item");

        this.button.addEventListener('click', this.handleNext.bind(this));
    }

    handleNext() {
        console.log("FormView handleNext");
        this.emit('changeTab');
    }

    show(newTab) {
        console.log("FormView show");

        const oldMultiStep = this.multiSteps[newTab - 1];
        if (oldMultiStep != null) {
            oldMultiStep.classList.remove("steps__item--on");
            oldMultiStep.classList.add("steps__item--finished");
        }
        this.multiSteps[newTab].classList.add("steps__item--on");

        const oldTab = this.tabs[newTab - 1]
        if (oldTab != null) {
            this.tabs[newTab - 1].style.display = "none";
        }

        this.tabs[newTab].style.display = "block";
    }

    /*showChanges(event) {
        this.input = event.target;
        const obj = { value: this.input.value,
            mask: this.input.dataset.mask};

      this.emit('changeItemMasc', obj);
    }

    */
}

export default FormView;