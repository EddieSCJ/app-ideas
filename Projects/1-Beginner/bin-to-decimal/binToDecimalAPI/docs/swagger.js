const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-restify');
const options = require('./options');
const { getServer } = require('./../server');

const swagger = () => {
  const server = getServer();

  const setup = () => {
    const specs = swaggerJSDoc(options);
    server.get('/docs', swaggerUI.setup(specs));
    server.get('/swagger-ui-init.js', ...swaggerUI.serve);
    server.get('/swagger-ui.css', ...swaggerUI.serve);
    server.get('/swagger-ui-bundle.js', ...swaggerUI.serve);
    server.get('/swagger-ui-standalone-preset.js', ...swaggerUI.serve);
  }
  return {
    setup
  }
}

module.exports = swagger();

