import  InputMaskModel from './models/InputMaskModel';

import  InputMaskView from './views/InputMaskView';

import  InputMaskController from './controllers/InputMaskController';


// initialize InputMask
const  inputMaskModel = new InputMaskModel();
const  inputMaskView = new InputMaskView();
const  inputMaskController = new InputMaskController(inputMaskModel, inputMaskView);
