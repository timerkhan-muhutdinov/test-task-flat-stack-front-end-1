class InputMaskController {
    constructor(model, view) {
      this._model = model;
      this._view = view;

      view.on('changeItemMasc', this.updateInputMask.bind(this));

      view.show(model.items);
    }
  
    updateInputMask(data) {
      const result = this._model.setValue(data.mask, data.value);

      this._view.show(result);
    }
  }

  export default InputMaskController;