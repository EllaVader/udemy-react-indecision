class VisibilityToggle extends React.Component {
  
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state  = {
      visibility: false
    }
  }

  handleToggleVisibility(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{ this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        { this.state.visibility && (
          <div>
            <p>Hey you wanted to see this!</p>
          </div>
        ) }
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibility = false;
// const render = () => {
  
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleMe}>{ visibility ? 'Hide Details' : 'Show Details' }</button>
      // { visibility && (
      //   <div>
      //     <p>Hey you wanted to see this!</p>
      //   </div>
      // )}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById('app'));
// };

// const toggleMe = () => {
//   visibility = !visibility;
//   render();
// }

// render();
