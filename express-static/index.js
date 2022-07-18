const express = require('express');
const path = require('path');
const app = express();
const pathJoin = path.join(__dirname, 'public');
const expressStatic = express.static(pathJoin);
console.log(pathJoin);

app.use(expressStatic);

// eslint-disable-next-line no-console
app.listen(3000, console.log('listening at 3000!'));
