# Pure redux

Exploring pure redux. No React yet.

It's deployed [here](https://avermeulen.github.io/pure-redux/).

## How to use redux.

To get going with Redux create a `Reducer`, define default state and create a Redux Store using `createStore`. Then subscribe to the store and then send dispatch the appropriate events to the store. In the subscription to the store you can update the DOM appropriately.

Add this `script` tag to your webpage to add a reference to redux:

```
    <script src="https://unpkg.com/redux/dist/redux.js"></script>
```