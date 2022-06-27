const { reset } = require("colors");

module.exports = function reverse (n) {
    k = n.toString()
    let strReverse = k.split('').reverse().join('').replace('-', '')
    return strReverse
}
