'use strict';

console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: []
};

var render = function render() {
  // JSX - Javascript XML
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subTitle && React.createElement(
      'p',
      null,
      app.subTitle
    ),
    React.createElement(
      'p',
      null,
      app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Clear All Options'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item one'
      ),
      React.createElement(
        'li',
        null,
        'Item two'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  //will only render those elements that need to be updated
  ReactDOM.render(template, appRoot);
};

//onSubmit takes the event as an argument
var onFormSubmit = function onFormSubmit(event) {
  //stop the full page refresh
  event.preventDefault();
  //get the value the user typed
  //event.target points the element that the event started on, for our example its' the form element.
  //you have access to all of the elements on the form  option.value is the "name" of the element and value is it's value
  var option = event.target.elements.option.value;

  //check to see if a value was typed in
  if (option) {
    //add this option to the array
    app.options.push(option);
    //clear out the text box
    event.target.elements.option.value = '';
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var appRoot = document.getElementById('app');

render();
