const fs = require('fs');


// MAKE SURE 03 demo.txt Is there in files folder 
fs.unlink('./files/03 demo.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully');
});
