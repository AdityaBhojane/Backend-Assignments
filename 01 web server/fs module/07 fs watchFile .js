const fs = require('fs');

fs.watch('./files/02 file.txt', (eventType, filename) => {
  if (filename) {
    console.log(`${filename} file Changed`);
    console.log(`Event Type: ${eventType}`);
  }
});


//  its runs like a server which provide us 
// details like event and filename 
// when someone try to change files