import React from 'react';
//for all stateless functional components, you can remove the 'return' statement and the brackets and just wrap it in parenthesis for clarity.
const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  </div>
);


export default Action;