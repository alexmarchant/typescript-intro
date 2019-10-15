enum DropdownState {
  Closed,
  Hover,
  Open
}

let currentState: DropdownState

switch (currentState) {
  case DropdownState.Closed:
    console.log('closed')
    break
  case DropdownState.Hover:
    console.log('hover')
    break
  case DropdownState.Open:
    console.log('open')
    break
}
