const chai = require('chai');
const chaiHttp = require('chai-http');
const { server } = require('./../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Should test the binary converter endpoint', () => {
  const BINARY_CODE = 100101;

  it('Should test the get endpoint', (done) => {
    chai
      .request(server)
      .get(`/${BINARY_CODE}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('number');
        res.body.should.be.eql(37);
        done();
      })
  })
})