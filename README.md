# SD Labs recruitment task

## How to run and test application
Before even thinking of anything remember to install all depedencies with
```
yarn
```

### Run
To run the app type in your terminal:
```
yarn start
```
and visit [localhost:3000](http://localhost:3000).

### Test
To test app type in
```
yarn test
```
and see if I didn't mess up something ;)

## Short story what and why
App was meant to be done with React and Redux. That's cool as that's technology I'm working with every day. To start fast I've used [create-react-app](https://github.com/facebook/create-react-app) as a bolierplate.

Routing is managed by [react-router](https://github.com/ReactTraining/react-router), state selector (only one, as the app is not that big ;)) is handled with [reselect](https://github.com/reduxjs/reselect) to improve it's performance (in the future). I know maybe that's a little bit of over engineering, but it's ready to scale up as reselect have nice memoization.

Connection of Redux store and Local Storage (saving all the data) is handled via Redux's middleware where it catch specific action types, manipulate the data and push forward action with saving all recipes. That's very characteristic case, otherwise I would pass e.g. `id` of deleted recipe directly to the saga which after some dialogue with API would send successful event to Reducer and there I'd manipulate the state there.
Middleware with only one action handled by reducer is a way to do not manipulate recipes list twice (during saving to both LS and Redux store).

Even if it's not about the design I used [Material-UI](https://material-ui.com/) components to do not make app looks like it's 90s :)

There are some unit tests, runned by Jest, written in enzyme with over 80% of code coverage. Also snapshot tests are written for some components. There is some work to be done to reach close to 100% of coverage but I didn't want to spend overhours for that. I think you can see from those tests that I'm writing testable code and care about tests during development.

To improve your experience I added some example recipes. Have fun!

## To improve:
- Write more tests
- Think about design. Add margins between some elements to improve readability
