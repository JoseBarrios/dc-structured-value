const IntangibleDataController = require('dc-intangible');
const TYPE = 'StructuredValueDataController'

class StructuredValueDataController extends IntangibleDataController{

	static get type(){ return TYPE; }

	constructor(model){
		model = model || {};
		super(model)
	}

}

module.exports = StructuredValueDataController;
