var expect = require('chai').expect
  , extend = require('./')

describe('extend', function() {

  it('should copy values', function() {
    var from = { a: 1, b: 2 }, to = {}
    expect(extend(from)(to)).to.equal(to)
    expect(from).to.eql({ a: 1, b: 2 })
    expect(from).to.eql(to)
  })

  it('should not override values', function() {
    var from = { a: 1, b: 2 }, to = { a: 3 }
    extend(from)(to)
    expect(to).to.eql({ a: 3, b: 2 })
  })

})