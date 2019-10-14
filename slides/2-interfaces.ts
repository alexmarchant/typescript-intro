// How do you specify complex objects?
interface Test {
  id: number
  payload: {
    status: string
  }
}

const test: Test = {
  id: 1,
  payload: {
    status: 'Draft'
  }
}
console.log(test.id) // Valid prop
console.log(test.payload.testType) // Invalid prop