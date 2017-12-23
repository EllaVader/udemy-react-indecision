import React from 'react';

export default class AddOption extends React.Component {
  //using the new ES6 syntax - not declaring it in the constructor.
  state = { error: undefined };
  // we have a handleAddOption here (check if option is valued and clear the form)
  // but we also call the parent's handleAddOption because it owns the state of the options array
  handleAddOption = (e) =>  { //using the new ES6 syntax to avoid the bind issue that we needed in the constructor.
    
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    // call the parent's method
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));

    if (!error) {
      // clear out the text box
      e.target.elements.option.value = '';
    }
  }
  render() {
    // onSubmit call this classes handleAddOption, which calls the parent class handleAddOption
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
