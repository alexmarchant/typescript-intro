// Basic types
const sentence = ' A    Big Green Ball  '

function clean(string) {
  const trimmedString = string.trim()
  const parts = trimmedString.split(' ')
  const trimmedParts = parts.map(clean)
  return trimmedParts.join(' ')
}

function isTrimmed(string) {
  return string === string.trim()
}

// Try interfaces
const draftTest = {
  id: 1,
  payload: {
    status: 'Draft'
  }
}

const inReviewTest = {
  id: 2,
  payload: {
    status: 'In Review'
  }
}

const workspace = {
  id: 'asdf',
  payload: {
    type: 'sales'
  },
  drops: [ draftTest, inReviewTest ]
}

function getInReviewTests(workspace) {
  return workspace.drops.filter(drop => {
    drop.payload.status === 'In Review'
  })
}