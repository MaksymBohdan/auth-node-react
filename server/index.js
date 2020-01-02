const startServer = require('./src/server')
const confiq = require('./config');


startServer.listen(confiq.port, () => {
  console.log(`server started on port ${confiq.port}`);
});

