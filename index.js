module.exports = cubeFaceName
function cubeFaceName (slot) {
  switch (slot) {
    case 0: return 'px'
    case 1: return 'nx'
    case 2: return 'py'
    case 3: return 'ny'
    case 4: return 'pz'
    case 5: return 'nz'
    default: throw new Error('must specify a slot 0 - 5')
  }
}
