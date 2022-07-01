const data = new Uint8Array(Buffer.from(process.argv[2] + '\n'));
const fs = require('fs');
fs.writeFile('note.txt', data, err => {
  if (err) throw err;

});
