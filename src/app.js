class IndecisionApp extends React.Component {
  
  constructor(props){
    super(props);
    //need to bind so the child component can have a proper reference to
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    //we want to track the state of the options as they get updated
    this.state = {
      options: props.options
    };
  }

  // lifecycle method on React that is called at the beginning of the lifecycle
  componentDidMount() {
    console.log('Component did mount!');

  }
  // lifecyle method on React when a component updates
  componentDidUpdate(prevProps, prevState){
    console.log('Component did update!');
  }

  // lifecycle method on React when a component when a new component is loaded (i.e. navigating to a new page)
  componentWillUnmount() {
    console.log('Component will unmount');
  }
  handlePick() {
    //pick a random element in the array
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  // handleDeleteOptions method needed here at parent level
  // but a child component will call it.
  handleDeleteOptions() {
    //short cut way to call set state - wrap object in parenthesis
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove) 
    }))
  }

  handleAddOption(option){
    //error check
    if(!option){
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
  
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
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
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

// creating default properties
Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map(option => (
          <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={ (e) => {
          // use the onclick event that takes the event as an argument,
          // now call parent handle.deleteOption with the text we want to delete.
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  )
};

class AddOption extends React.Component {

  // we need a constructor for this class because we are using "this" below in the handleAddOption event handler method
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    
    // keeping track of the error message
    this.state = {
      error: undefined
    };
  }

  // we have a handleAddOption here (check if option is valued and clear the form)
  // but we also call the parent's handleAddOption because it owns the state of the options array
  handleAddOption(e) {

    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    // call the parent's method
    const error = this.props.handleAddOption(option);
    
    this.setState(() => ({ error }));

    // clear out the text box
    e.target.elements.option.value = '';
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));