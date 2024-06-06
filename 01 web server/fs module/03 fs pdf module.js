const fs = require('fs');
const PDFDocument = require('pdfkit');
//  npm install pdfkit

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output.pdf'));

doc.text('Hello, this is a PDF document.');
doc.end();
