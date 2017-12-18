'use strict';

console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

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
  )
);

var appRoot = document.getElementById('app');
