const data = new Uint8Array(Buffer.from(Math.random() + '\n'));
const fs = require('fs');
fs.writeFile('random.txt', data, err => {
  if (err) throw err;
  // console.log(data);
});
