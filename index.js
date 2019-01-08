// define the application state & create a reducer
function counter(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        if (state > 0) {
            return state - 1
        }
        return state;
      default:
        return state
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    // create a store using the reducer define above
    const createStore = Redux.createStore;
    const store = createStore(counter);

    // DOM code for getting all the elements
    const addButton = document.querySelector('.add');
    const minusButton = document.querySelector('.minus');
    const theCounter = document.querySelector('.theCounter');
    const updateCounter = () =>  theCounter.innerHTML = store.getState() 

    // DOM event handlers which dispatch actions to the Redux store
    addButton.addEventListener('click', function() {
        store.dispatch({
            type: 'INCREMENT'
        });
    });

    minusButton.addEventListener('click', function() {
        store.dispatch({
            type: 'DECREMENT'
        });
    });

    // subscribe for updates to the reduxStore
    store.subscribe(updateCounter);

    // ensure the initial counter value of the redux state is display on the screen
    updateCounter();

});