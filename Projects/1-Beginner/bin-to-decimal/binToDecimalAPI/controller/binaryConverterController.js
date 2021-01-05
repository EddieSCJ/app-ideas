const { getServer } = require('./../server');
const binaryConverter = require('./../model/binaryConverter');

const server = getServer();

server.get('/:binary', (req, res) => {
  const binary = req.params.binary;
  const result = binaryConverter.convertToDecimal(binary);
  res.send(200, result);
});
