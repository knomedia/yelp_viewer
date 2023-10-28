var expect = require('chai').expect
var template = require('./template')

describe('YelpCount/utils/template', function() {
  it('renders only count when no template is given', function() {
    let table = [
      {count: 5, template: null, expected: "5"},
      {count: 5, template: undefined, expected: "5"},
      {count: 5, expected: "5"},
    ]
    table.forEach(function(t) {
      expect(template(t.count, t.template)).to.equal(t.expected);
    })
  });
  it("replaces template %%count%% with count variable", function() {
    let table = [
      {count: 5, template: "Hi, %%count%%", expected: "Hi, 5"},
    ]
    table.forEach(function(t) {
      expect(template(t.count, t.template)).to.equal(t.expected);
    })
  });
  it('defaults count to zero when none given', function() {
    let table = [
      {count: null, template: "Hi, %%count%%", expected: "Hi, 0"},
      {count: undefined, template: "Hi, %%count%%", expected: "Hi, 0"},
    ]
    table.forEach(function(t) {
      expect(template(t.count, t.template)).to.equal(t.expected);
    })
  });
})
