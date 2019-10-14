// Simple
function add(a: number, b: number): number {
  return a + b
}
const sum = add(1, 2)
// > 3




// Type inference
function add2(a: number, b: number) {
  return a + b
}
const sum2 = add2(1, 2)
// > 3




// Function definitions
function modifyString(funcInput: string, modifier: (modifierInput: string) => string): string {
  return modifier(funcInput)
}
modifyString('  asdf  ', (string => {
  return string.trim()
}))
// > 'asdf'




// With type alias
type Modifier = (input: string) => string
function modifyString2(input: string, modifier: Modifier): string {
  return modifier(input)
}
// Same functionality as above