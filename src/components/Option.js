import React from 'react';

const Option = (props) => (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          // use the onclick event that takes the event as an argument,
          // now call parent handle.deleteOption with the text we want to delete.
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );

export default Option;
