const binaryConverter = () => {

  const convertToDecimal = (binary) => {
    let binaryArray = binary.split("");
    let index = binaryArray.length - 1;
    let result = 0;

    binaryArray.forEach(binaryNumber => {
      let tempBinary = parseInt(binaryNumber);
      result+= tempBinary * Math.pow(2, index);
      index--;
    });

    return result;
  }

  return {
    convertToDecimal
  };
};

module.exports = binaryConverter();