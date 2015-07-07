var cubemapDirection = require('./')
var test = require('tape')

test('gets a name for cubemap slot', function (t) {
  t.equals(cubemapDirection(0), 'px')
  t.equals(cubemapDirection(1), 'nx')
  t.throws(cubemapDirection.bind(null, 6), 'throws err')
  t.end()
})
