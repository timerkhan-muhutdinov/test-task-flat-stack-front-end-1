import { EventEmitter } from '../EventEmitter';

class FormView extends EventEmitter {
    constructor() {
        super();

        this.form = document.forms.order;
        this.button = document.getElementById("button");
        this.tabs = document.getElementsByClassName("order-form__tab");
        this.multiSteps = document.getElementsByClassName("steps__item");
        this.btnCopy = document.getElementById("btnCopyValue")

        this.refHandlerNext = this.handleNext.bind(this);
        this.button.addEventListener('click', this.refHandlerNext);
        this.btnCopy.addEventListener('click', this.handleCopy.bind(this));
    }

    handleNext() {
        this.emit('changeTab');
    }

    handlePrint() {
        var content = document.querySelector(".main__content .print-content").innerHTML;

        var WinPrint = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
        WinPrint.document.write('');
        WinPrint.document.write(content);
        WinPrint.document.write('');
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
    }

    handleCopy() {
        let elements = this.form.elements;
        elements["billing.fullName"].value = elements["shipping.fullName"].value;
        elements["billing.street"].value = elements["shipping.street"].value;
        elements["billing.address"].value = elements["shipping.address"].value;
        elements["billing.city"].value = elements["shipping.city"].value;
        elements["billing.country"].value = elements["shipping.country"].value;
        elements["billing.zip"].value = elements["shipping.zip"].value;
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

        document.querySelector(".main__content .success").innerHTML = `<div class="print-content"><h2>Thank you for your order!</h2>
        <p><strong>Order number is: ${data.numberOrder} </strong></p>
        <p>Your will recieve an email confirmation <br>
            shortly to <a href="mailto:jonathan.smith@gmail.com">jonathan.smith@gmail.com</a></p>
        <p>Estimated delivery Day is <br>
            <b>${data.deliveryDate.toDateString()}</b></p></div>
        <a id="btnPrint" href="javascript:void(0);">Print Recipe</a>`;
        
        var btnPrint = document.querySelector("#btnPrint");
        btnPrint.addEventListener('click', this.handlePrint.bind(this));
    }
}

export default FormView;