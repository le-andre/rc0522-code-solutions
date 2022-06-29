const fs = require('fs');
fs.readFile('/workspaces/rc0522-code-solutions/node-fs-readfile/dijkstra.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
