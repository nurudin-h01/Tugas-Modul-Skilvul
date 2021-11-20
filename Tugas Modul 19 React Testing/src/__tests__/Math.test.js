import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const initial = [3, 5]
  const output = 8

  // Act
  const expected = Add(initial[0], initial[1])

  // Assert
  expect(expected).toBe(output)

})

test('Return substraction of a - b', () => {
  // Arrange
  const initial = [5, 3]
  const output = 2

  // Act
  const expected = Substract(initial[0], initial[1])

  // Assert
  expect(expected).toBe(output)

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const initial = [4, 5]
  const output = 20

  // Act
  const expected = Multiplication(initial[0], initial[1])

  // Assert
  expect(expected).toBe(output)

})