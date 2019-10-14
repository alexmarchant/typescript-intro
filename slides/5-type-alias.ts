type TestType = 'Draft' | 'In Review' | 'In Progress'

interface AliasTest {
  payload: {
    status: TestType
  }
}

const testType: TestType = 'Draft'

const aliasTest: AliasTest = {
  payload: {
    status: testType
  }
}