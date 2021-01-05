const serverObject = require('./server');
const swagger = require('./docs/swagger');
const binaryConverterController = require('./controller/binaryConverterController');

serverObject.start();
swagger.setup();

module.exports = { server: serverObject.getServer() }