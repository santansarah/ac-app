const express = require('express'); 
const app = express();

const acRoutes = require('./routes/aclist.js');
app.use('/aclist', acRoutes);

app.listen(3000, () => console.log('listening'));