class Counter extends React.Component {
 
  constructor(props){
   super(props);
   this.handleAddOne = this.handleAddOne.bind(this);
   this.handleMinusOne = this.handleMinusOne.bind(this);
   this.handleReset = this.handleReset.bind(this);

   // track the following state default values
   this.state = {
    count: 0
   };
 }

 componentDidMount() {
 
  const stringCount =  localStorage.getItem('count');
  // convert the string to an int.
  const count = parseInt(stringCount, 10);
 
  // make sure that it is a valid number
  if (!isNaN(count)){
     this.setState(() => ({ count }))
  }
 }

 componentDidUpdate(prevProps, prevState){
  if(prevState.count !== this.state.count){
    //this will get converted into a string
    localStorage.setItem('count', this.state.count);
  }
 }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleAddOne() {
    // to change the state of the count property, you need to call setState
    // setState takes a method as an argument.  It returns an object back
    // setState has one argument, which is the objects previous state
    // only update the properties on the object that we care about, we can ignore the others
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
