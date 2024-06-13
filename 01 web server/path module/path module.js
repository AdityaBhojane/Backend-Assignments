const path = require('path');

console.log('Basename:', path.basename('/home/user/file.txt'));
console.log('Dirname:', path.dirname('/home/user/file.txt'));
console.log('Extname:', path.extname('/home/user/file.txt'));
console.log('Join:', path.join('/home', 'user', 'dir', 'file.txt'));
console.log('Resolve:', path.resolve('/home/user', 'dir/file.txt'));
console.log('Normalize:', path.normalize('/home/user//dir/../dir/'));
console.log('Is Absolute:', path.isAbsolute('/home/user'));
