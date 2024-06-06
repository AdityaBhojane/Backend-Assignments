const fs = require('fs');

const content = '\nThis content will be appended to the file';

fs.appendFile('./files/file.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Content appended successfully');
});
