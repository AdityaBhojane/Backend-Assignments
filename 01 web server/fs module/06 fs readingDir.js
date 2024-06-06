const fs = require('fs');

fs.readdir('./files', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log('Directory contents:', files);
});

// output -
// Directory contents: [ '01 newFile.css', '02 file.txt', '03 demo.txt', '04 make demo.txt' ]