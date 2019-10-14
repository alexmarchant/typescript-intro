// Basic types
const sentence = ' A    Big Green Ball  '

function clean(string: string): string {
  const trimmedString = string.trim()
  const parts = trimmedString.split(' ')
  const trimmedParts = parts.map(clean)
  return trimmedParts.join(' ')
}

function isTrimmed(string: string): boolean {
  return string === string.trim()
}

// Try interfaces
interface PracticeTest {
  id: number,
  payload: {
    status: 'Draft' | 'In Review'
  }
}

interface Workspace {
  id: string,
  payload: {
    type: 'sales'
  },
  drops: PracticeTest[]
}

const draftTest: PracticeTest = {
  id: 1,
  payload: {
    status: 'Draft'
  }
}

const inReviewTest: PracticeTest = {
  id: 2,
  payload: {
    status: 'In Review'
  }
}

const workspace: Workspace = {
  id: 'asdf',
  payload: {
    type: 'sales'
  },
  drops: [ draftTest, inReviewTest ]
}

function getInReviewTests(workspace: Workspace): PracticeTest[] {
  return workspace.drops.filter(drop => {
    drop.payload.status === 'In Review'
  })
}
