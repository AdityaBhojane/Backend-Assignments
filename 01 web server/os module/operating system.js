const os = require('os');

console.log('CPU Architecture:', os.arch());
console.log('Platform:', os.platform());
console.log('CPUs:', os.cpus());
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());
console.log('Home Directory:', os.homedir());
console.log('Temporary Directory:', os.tmpdir());
console.log('Hostname:', os.hostname());
console.log('OS Type:', os.type());
console.log('System Uptime:', os.uptime());
console.log('Network Interfaces:', os.networkInterfaces());
