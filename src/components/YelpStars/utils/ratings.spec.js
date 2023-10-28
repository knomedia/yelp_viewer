var expect = require('chai').expect
var ratings = require('./ratings')

describe('ratings', function() {
  describe('full number', function() {
    it('returns the full number and a boolean for remaining partial', function() {
      let table = [
        {input: 3.2, full: 3, partial: true},
        {input: 0, full: 0, partial: false},
        {input: 0.5, full: 0, partial: true},
        {input: 4.5, full: 4, partial: true},
        {input: 4.9, full: 4, partial: true},
      ]
      table.forEach(function(test) {
        let [full, partial] = ratings(test.input)
        expect(full).to.equal(test.full)
        expect(partial).to.equal(test.partial)
      })
    });
  });
})
