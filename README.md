# act-bug

```
yarn

yarn jest

...

 PASS  ./Foo.test.tsx
  Foo
    ✓ test (62ms)

  console.error node_modules/react-dom/cjs/react-dom.development.js:545
    Warning: An update to Foo inside a test was not wrapped in act(...).
    
    When testing, code that causes React state updates should be wrapped into act(...):
    
    act(() => {
      /* fire events that update state */
    });
    /* assert on the output */
    
    This ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act
        in Foo
```
