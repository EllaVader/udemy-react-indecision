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

  // you can also pass in an object to setState, don't need to pass in a function
  // passing in an object is an older way may end up becoming absolute
  // setState is asynchronous so we don't know what order this will be executed in.
  // don't use this way as it's problematic, use the function way.
  // you can use this if don't need access to the previous values.
  // handleReset() {
  //   this.setState({
  //     count: 0
  //   });

  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // }

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


// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   //will only render those elements that need to be updated
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();