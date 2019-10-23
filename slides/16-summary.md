
# Summary

## Pros

### Incremental

- Typescript plays well with normal javascript
- We ingest tons of typescript projects right now and benefit from their types
- We don't need spend extra resources converting over, just use the js we have, new stuff can be written in TS

### Stability

https://twitter.com/swyx/status/1093670844495089664

### Readability

```js
this.fetchData(tap, drop, card, options) {
  // Oh cool i have access to the drop payload here...
  // Spoiler, nope, its the drop ID
  drop.payload.testType // error
  ...
}
```

```ts
this.fetchData(tap: string, drop: string, card: string, options: any) {
  ...
}
```

### We'd be in good company... Prominent people and projects using Typescript:

- Google
  - Angular
  - Others...
- Airbnb
- Microsoft
  - VSCode
  - Typescript compiler is written in itself
- Vue 3
- Storybook
- Asana
- Ember
- JetBrains

## Cons

- Learning curve
- Types can get in your way
- Extra tooling, extra complexity
- Sometimes when there are lots of errors the typescript language server fails
- Vue components have to be structured differently
