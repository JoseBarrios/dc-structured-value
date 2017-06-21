'use strict'

var assert = require('assert');
var StructuredValue = require('../index.js');


var model = {};
model.givenName = 'jose';
model.familyName = 'barrios';
let structuredValue = new StructuredValue(model);

describe('StructuredValue\n', function() {
  describe('Static Methods:', function() {
    describe('StructuredValue.isNumber()', function() {
      it('should ...', function() {
        assert.equal(StructuredValue.isNumber(1), true);
        assert.equal(StructuredValue.isNumber(''), false);
      });
    });
  });
});
