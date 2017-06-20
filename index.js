const Intangible = require('@josebarrios/intangible');

class StructuredValue extends Intangible{

  constructor(model){
    model = model || {};
    super(model)
  }
}

module.exports = StructuredValue;
