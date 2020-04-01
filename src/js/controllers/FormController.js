class FormController {
    constructor(model, view) {
      this._model = model;
      this._view = view;

      view.on('changeTab', this.changeTab.bind(this));
      view.on('submitForm', this.submitForm.bind(this));

      view.handleNext();
    }
  
    submitForm(data){
        console.log("FormController submitForm");  
        const request = this._model.postForm(data);

       this._view.showSuccess(request);
    }

    changeTab() {
      console.log("FormController changeTab");  
      const tab = this._model.nextTab();

      this._view.show(tab);
    }
  }

  export default FormController;