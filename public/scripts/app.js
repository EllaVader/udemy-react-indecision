'use strict';

var visibility = false;
var render = function render() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleMe },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey you wanted to see this!'
      )
    )
  );

  ReactDOM.render(template, document.getElementById('app'));
};

var toggleMe = function toggleMe() {
  visibility = !visibility;
  render();
};

render();
