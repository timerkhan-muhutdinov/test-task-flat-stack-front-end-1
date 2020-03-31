class FormController {
    constructor(model, view) {
      this._model = model;
      this._view = view;

      view.on('changeTab', this.changeTab.bind(this));
      console.log("FormController"); 
       
      view.handleNext();
    }
  
    changeTab() {
      console.log("FormController changeTab");  
      const tab = this._model.nextTab();

      this._view.show(tab);
    }
  }

  export default FormController;