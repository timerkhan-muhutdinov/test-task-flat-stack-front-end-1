import  InputMaskModel from './models/InputMaskModel';
import  GeoAutoCompleteModel from './models/GeoAutoCompleteModel';
import  FormModel from './models/FormModel';

import  InputMaskView from './views/InputMaskView';
import  GeoAutoCompleteView from './views/GeoAutoCompleteView';
import  FormView from './views/FormView';

import  InputMaskController from './controllers/InputMaskController';
import  GeoAutoCompleteController from './controllers/GeoAutoCompleteController';
import  FormController from './controllers/FormController';


// initialize InputMask
const  inputMaskModel = new InputMaskModel();
const  inputMaskView = new InputMaskView();
const  inputMaskController = new InputMaskController(inputMaskModel, inputMaskView);

// initialize geoAutoComplete
const  geoAutoCompleteModel = new GeoAutoCompleteModel();
const  geoAutoCompleteView = new GeoAutoCompleteView();
const  geoAutoCompleteController = new GeoAutoCompleteController(geoAutoCompleteModel, geoAutoCompleteView);

// initialize geoAutoComplete
const  formModel = new FormModel();
const  formView = new FormView();
const  formController = new FormController(formModel, formView);


