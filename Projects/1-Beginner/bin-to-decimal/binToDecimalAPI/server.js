const restify = require('restify');
const restifyServer = restify.createServer();

const server = () => {
  const start = () => {
    const PORT = 8080;
    restifyServer.listen(PORT, () => {
      console.log(`O servidor está no ar na porta ${PORT}`);
    });
  };

  const getServer = () => {
    return restifyServer;
  }

  return {
    start,
    getServer
  }
};

module.exports = server();
