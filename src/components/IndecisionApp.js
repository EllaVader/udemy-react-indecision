import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {
  //we want to track the state of the options as they get updated
  state = { options: [] };
  
  // handleDeleteOptions method needed here at parent level
  // but a child component will call it.
  handleDeleteOptions = () => {
    //short cut way to call set state - wrap object in parenthesis
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }))
  }

  handleAddOption = (option) => {
    //error check
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    // Use set state to update the state of the property -- it will automatically re-render as it see's it's been updated
    // we don't want to manipulate the state or prevState object directly, so set the options prop to a new array
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }

  handlePick = () => {
    //pick a random element in the array
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  // lifecycle method on React that is called at the beginning of the life-cycle
  componentDidMount() {
    try {
      //if parsing throws an exception, catch it and do nothing
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      //if options is not empty, then load it.
      if (options) {
        this.setState(() => ({ options }));
      }

    } catch (e) {
      // do nothing at all
    }
  }

  // lifecyle method on React when a component updates / changes
  componentDidUpdate(prevProps, prevState) {
    //save our options to local storage
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  // lifecycle method on React when a component when a new component is loaded (i.e. navigating to a new page)
  componentWillUnmount() {
    console.log('Component will unmount');
  }
 

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}