# Typescript Intro

### Why

#### Stability

https://twitter.com/swyx/status/1093670844495089664

#### Readability

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

### People using in Typescript

- Google
- Airbnb
- Microsoft
  - VSCode
  - Typescript compiler is written in itself
- Vue 3
- Angular
- Storybook
- Asana
- Ember
- JetBrains