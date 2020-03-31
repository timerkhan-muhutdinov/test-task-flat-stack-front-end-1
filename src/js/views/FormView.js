import { EventEmitter } from '../EventEmitter';

class FormView extends EventEmitter {
    constructor() {
        super();

        this.form = document.forms.order;
        this.button = document.getElementById("button");
        this.tabs = document.getElementsByClassName("order-form__tab");
        this.multiSteps = document.getElementsByClassName("steps__item");

        console.log("FormView");

        this.refHandlerNext = this.handleNext.bind(this);
        this.button.addEventListener('click', this.refHandlerNext);
    }

    handleNext() {
        this.emit('changeTab');
    }

    handleSubmit() {
        let elements = this.form.elements;
        const data = {
            shipping: {
                fullName: elements["shipping.fullName"].value,
                phone: elements["shipping.phone"].value,
                street: elements["shipping.street"].value,
                address: elements["shipping.address"].value,
                city: elements["shipping.city"].value,
                country: elements["shipping.country"].value,
                zip: elements["shipping.zip"].value,
            },
            billing: {
                fullName: elements["billing.fullName"].value,
                email: elements["billing.email"].value,
                street: elements["billing.street"].value,
                address: elements["billing.address"].value,
                city: elements["billing.city"].value,
                country: elements["billing.country"].value,
                zip: elements["billing.zip"].value,
            },
            card: {
                fullName: elements["card.fullName"].value,
                number: elements["card.number"].value,
                date: elements["card.date"].value,
                cvc: elements["card.cvc"].value,
                
            }
        }

        this.emit('submitForm', data);
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

        if((this.tabs.length - newTab) == 1)
        {
            this.button.innerHTML = "Pay Securely";
            this.button.removeEventListener('click', this.refHandlerNext);
            this.button.addEventListener('click', this.handleSubmit.bind(this));
        }
    }

    showSuccess(data){
        console.log("showSuccess", data);
        this.form.style.display = "none";
        //document.querySelector(".main__content .success").style.display = "block";

        document.querySelector(".main__content .success").innerHTML = `<h2>Thank you for your order!</h2>
        <p><strong>Order number is: ${data.numberOrder} </strong></p>
        <p>Your will recieve an email confirmation <br>
            shortly to <a href="mailto:jonathan.smith@gmail.com">jonathan.smith@gmail.com</a></p>
        <p>Estimated delivery Day is <br>
            <b>${data.deliveryDate.toDateString()}</b></p>
        <a href="">Print Recipe</a>`;
    }
}

export default FormView;