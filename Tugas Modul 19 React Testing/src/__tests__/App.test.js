import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange
  const initial1 = [{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  }] 
  const initial2 ={
    id: 2,
    name: 'Build awasome react app',
    isComplete: false,
  }
  const output = [ 
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },{
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    }
  ]

  // Act
  const expected = AddTodo(initial1, initial2)

  // Assert
  expect(expected).toEqual(output)
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const initialValue = [[{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  }], {
    id: 2,
    name: 'Build awasome react app',
    isComplete: false,
  }]
  const output = [ 
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    }
  ]
  // Act
  const expected = AddTodo(initialValue[0], initialValue[1])

  // Assert
  expect(expected).not.toEqual(output)

})