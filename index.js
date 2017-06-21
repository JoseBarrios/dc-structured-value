const Thing = require('@josebarrios/thing')
const Intangible = require('@josebarrios/intangible');
const Multiple = require('aggregation/es6');

class StructuredValue extends Multiple(Thing, Intangible){
    constructor(model){
      model = model || {};
      super(model)
    }
}

module.exports = StructuredValue;
