const startServer = require('./src/server');
const confiq = require('./config');
const mongoose = require('mongoose');

startServer.listen(confiq.port, () => {
  console.log(`server started on port ${confiq.port}`);
});

mongoose
  .connect(confiq.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('db connected'))
  .catch(err => console.log('db is not connected' + err));
