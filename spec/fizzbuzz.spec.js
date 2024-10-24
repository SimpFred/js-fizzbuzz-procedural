const answer = require('../src/fizzbuzz')

/**
 * FizzBuzz Test Suite
 *
 * This test suite verifies the functionality of the FizzBuzz implementation.
 */

/**
 * Test case for multiples of 3.
 * It should return 'Fizz' for indices corresponding to multiples of 3.
 */
it('should return Fizz for multiples of 3', () => {
  expect(answer[2]).toBe('Fizz')
  expect(answer[5]).toBe('Fizz')
  expect(answer[8]).toBe('Fizz')
})

/**
 * Test case for multiples of 5.
 * It should return 'Buzz' for indices corresponding to multiples of 5.
 */
it('should return Buzz for multiples of 5', () => {
  expect(answer[4]).toBe('Buzz')
  expect(answer[9]).toBe('Buzz')
})

/**
 * Test case for multiples of both 3 and 5.
 * It should return 'FizzBuzz' for indices corresponding to multiples of both 3 and 5.
 */
it('should return FizzBuzz for multiples of 3 and 5', () => {
  expect(answer[14]).toBe('FizzBuzz')
})

/**
 * Test case for non-multiples of 3 and 5.
 * It should return the number itself for indices corresponding to non-multiples of 3 and 5.
 */
it('should return the number for non-multiples of 3 and 5', () => {
  expect(answer[0]).toBe(1)
  expect(answer[1]).toBe(2)
  expect(answer[3]).toBe(4)
})

// fizzbuzz.spec.js

describe('FizzBuzz Test Suite', () => {
  it('should return Fizz for multiples of 3', () => {
    expect(answer[2]).toBe('Fizz')
    expect(answer[5]).toBe('Fizz')
    expect(answer[8]).toBe('Fizz')
  })

  it('should return Buzz for multiples of 5', () => {
    expect(answer[4]).toBe('Buzz')
    expect(answer[9]).toBe('Buzz')
  })

  it('should return FizzBuzz for multiples of 3 and 5', () => {
    expect(answer[14]).toBe('FizzBuzz')
  })

  it('should return the number for non-multiples of 3 and 5', () => {
    expect(answer[0]).toBe(1)
    expect(answer[1]).toBe(2)
    expect(answer[3]).toBe(4)
  })
})
