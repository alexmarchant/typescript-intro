// How do you specify complex objects?
interface Test {
  id: number
  status: string
}

const test: Test = {
  id: 1,
  status: 'Draft'
}
console.log(test.id) // Valid prop
console.log(test.testType) // Invalid prop




// Extensible
interface TestWithType extends Test {
  testType: string
}

const testWithType: TestWithType = {
  id: 1,
  status: 'Draft',
  testType: 'User Discovery'
}

console.log(testWithType.id) // Valid prop
console.log(testWithType.testType) // Now valid prop