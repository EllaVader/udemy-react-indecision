console.log('App.js is running');

// JSX - Javascript XML
var template = <p>This is JSX from app.js</p>;
//Babel converts the template variable above into the javascript below
// var template = React.createElement(
//   "p", {
//     id: "someId"
//   },
//   "This is JSX from app.js!"
// );
//the div with id of 'app' in our index.html
var appRoot = document.getElementById('app');

//.render takes 2 args, first is the element, 2nd is where to render it
ReactDOM.render(template, appRoot);
//note that this alone, won't work.  The browser doesn't know how to render the template variable with that jsx in it.
//use Babel to compile our jsx into javascript so the browser knows how to use it.