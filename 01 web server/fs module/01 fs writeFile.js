
const fs = require('fs')

const content = "/* hello there am created by fs module in node js"

fs.writeFile("./files/newFile.css",content,()=>{
  return new Error("something is wrong")
})




// Async code example

const fs = require('fs');

// const content = 'This is some content to write into the file';

try {
  fs.writeFileSync('/path/to/file.txt', content, 'utf8');
  console.log('File written successfully');
} catch (err) {
  console.error('Error writing file:', err);
}
