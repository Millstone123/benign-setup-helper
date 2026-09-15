// Runtime diagnostics loader
// Loads the native diagnostics module and reports version info
const diagnostics = require('./diagnostics.node');
console.log('Runtime version:', diagnostics.version);
