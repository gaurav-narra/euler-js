const problem1 = require('./../../src/problem-1');

describe('problem one', () => {
  it('should get sum of 3 & 5 multiples below 10, 100 and 1000', () => {
    let resp1 = problem1.sumOfMultiples(10,3)
    let resp2 = problem1.sumOfMultiples(10,5)
    let sum = resp1 + resp2
    sum.should.eql(23)

    resp1 = problem1.sumOfMultiples(100,3)
    resp2 = problem1.sumOfMultiples(100,5)
    resp3 = problem1.sumOfMultiples(100,15)
    sum = resp1 + resp2 - resp3
    sum.should.eql(2318)

    resp1 = problem1.sumOfMultiples(1000,3)
    resp2 = problem1.sumOfMultiples(1000,5)
    resp3 = problem1.sumOfMultiples(1000,15)
    sum = resp1 + resp2 - resp3
    sum.should.eql(233168)
  })
})
