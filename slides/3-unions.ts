interface UnionTest {
  payload: {
    status: 'Draft' | 'In Review' | 'In Progress'
  }
}

const unionTest: UnionTest = {
  payload: {
    status: 'Draft'
  }
}

// Valid modification
unionTest.payload.status = 'In Review'

// Invalid modification
unionTest.payload.status = 'Submitted'
