# cube-face-name

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)


Gets a human readable name like `'px'` or `'py'` for the specified index into a 3D cube, intended to be used alongside cube map manipulation in OpenGL applications. The order is the same as in DDS and OpenGL, see below.

## Example

```js
var direction = require('cube-face-name')
var range = require('array-range')

var images = range(6)
  .map(direction)
  .map(x => 'assets/skyboxes/cloudy-${x}.png')
```

Result: 

```js
[
  'assets/skyboxes/cloudy-px.png',
  'assets/skyboxes/cloudy-nx.png',
  'assets/skyboxes/cloudy-py.png',
  'assets/skyboxes/cloudy-ny.png',
  'assets/skyboxes/cloudy-pz.png',
  'assets/skyboxes/cloudy-nz.png'
]
```

## Usage

[![NPM](https://nodei.co/npm/cube-face-name.png)](https://www.npmjs.com/package/cube-face-name)

#### `name = cubeFace(slot)`

Returns a human-readable name for the given `slot` in a cube map, using the same ordering as OpenGL and various texture formats: `px, nx, py, ny, pz, nz`.

`slot` is between 0 (inclusive) and 6 (exclusive).

## See Also

- [cube-face-vector](https://www.npmjs.com/package/cube-face-vector)

## License

MIT, see [LICENSE.md](http://github.com/Jam3/cube-face-name/blob/master/LICENSE.md) for details.
