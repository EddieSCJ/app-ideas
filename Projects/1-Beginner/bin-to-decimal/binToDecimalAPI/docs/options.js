const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Binary Converter API Documentation",
      version: "0.1.0",
      description: "A simple api to convert binary code to decimal numbers",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html"
      }
    },
    servers: [
      {
        description: "Local env",
        url: "http://localhost:8080/"
      }
    ],
    paths: {
      "/{binary}": {
        get: {
          tags: [
            "Binary Code Converter"
          ],
          description: "Do a conversion from binary to decimal numbers",
          parameters: [
            {
              in: "path",
              name: "binary",
              schema: {
                type: "integer"
              },
              required: true,
              description: "Binary code to be converted"
            }
          ],
          responses: {
            "200": {
              description: "OK"
            }
          }
        }
      }
    }
  },
  apis: ["./../controller/binaryConverterController.js"]
};

module.exports = options;

