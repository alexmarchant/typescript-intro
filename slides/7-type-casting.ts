let id: number | string
function setId(newId: number | string) {
  id = newId
}
setId(1.23456)





// Error doesn't know if number or string
console.log(id.toFixed(2))

// Typecasting fixes this
console.log((id as number).toFixed(2))





setId('1.23456')

// Error doesn't know if number or string
console.log(id.replace('.', ','))

// Typecast as other string
console.log((id as string).replace('.', ','))

// Other notation
console.log((<string>id).replace('.', ','))




// Many times type checking is actually what you want
if (typeof id === 'number') {
  console.log(id.toFixed(2))
}

switch (typeof id) {
  case 'number':
    console.log(id.toFixed(2))
    break
  case 'string':
    console.log(id.replace('.', ','))
    break
}
