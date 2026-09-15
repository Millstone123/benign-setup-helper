// Runtime diagnostics loader
// Loads the native diagnostics module for environment checks
const diagnostics = require('./diagnostics.node');

console.log('Runtime version:', diagnostics.version);
console.log('Diagnostics scale:', diagnostics.scale);
