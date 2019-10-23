
# Summary

## Pros

### Incremental

- Typescript plays well with normal javascript
- We ingest typescript projects right now and benefit from their types 
  - 60k lines of typescript in our `node_modules` folder
- We don't need to spend extra resources converting existing code, just use the js we have, new stuff can be written in TS
  - POC on github https://github.com/AlphaUX/mgt/pull/404

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
- Sometimes when there are lots of errors the typescript language server fails, have to restart it
- Vue components have to be structured differently
