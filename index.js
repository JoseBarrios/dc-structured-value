const Thing = require('@josebarrios/thing')
const Intangible = require('@josebarrios/intangible');
const Multiple = require('aggregation/es6');

class StructuredValue extends Multiple(Intangible, Thing){
    constructor(model){
      model = model || {};
      super(model)
    }
}

module.exports = StructuredValue;
