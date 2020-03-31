import  InputMaskModel from './models/InputMaskModel';
import  GeoAutoCompleteModel from './models/GeoAutoCompleteModel';

import  InputMaskView from './views/InputMaskView';
import  GeoAutoCompleteView from './views/GeoAutoCompleteView';

import  InputMaskController from './controllers/InputMaskController';
import  GeoAutoCompleteController from './controllers/GeoAutoCompleteController';


// initialize InputMask
const  inputMaskModel = new InputMaskModel();
const  inputMaskView = new InputMaskView();
const  inputMaskController = new InputMaskController(inputMaskModel, inputMaskView);

// initialize geoAutoComplete
const  geoAutoCompleteModel = new GeoAutoCompleteModel();
const  geoAutoCompleteView = new GeoAutoCompleteView();
const  geoAutoCompleteController = new GeoAutoCompleteController(geoAutoCompleteModel, geoAutoCompleteView);


