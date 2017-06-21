'use strict'

var assert = require('assert');
var StructuredValue = require('../index.js');


var model = {};
model.image = 'url';
model.givenName = 'jose';
model.familyName = 'barrios';
let structuredValue = new StructuredValue(model);

describe('StructuredValue\n', function() {
  describe('Properties:', function() {
    describe('structuredValue.image', function() {
      it('should ...', function() {
        assert.equal(structuredValue.image, 'url');
      });
    });
  });
});
