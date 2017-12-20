class IndecisionApp extends React.Component {
  
  constructor(props){
    super(props);
    //need to bind so the child component can have a proper reference to
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);

    //we want to track the state of the options as they get updated
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    };
  }

  handlePick() {
    //pick a random element in the array
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  // handleDeleteOptions method needed here at parent level
  //but a child component will call it.
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }
  
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {

  //when the remove all button is clicked, it will call handleDeleteOptions from the parent.
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map(option => <Option key={option} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
       {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim()
    if(option){
      alert(option);
      //clear out the text box
      e.target.elements.option.value = '';
    }
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));