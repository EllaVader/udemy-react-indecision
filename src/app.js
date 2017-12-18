console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: []
};

const render = () => {
  // JSX - Javascript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Clear All Options</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  //will only render those elements that need to be updated
  ReactDOM.render(template, appRoot);
};

//onSubmit takes the event as an argument
const onFormSubmit = (event) => {
  //stop the full page refresh
  event.preventDefault();
  //get the value the user typed
  //event.target points the element that the event started on, for our example its' the form element.
  //you have access to all of the elements on the form  option.value is the "name" of the element and value is it's value
  const option = event.target.elements.option.value

  //check to see if a value was typed in
  if(option){
    //add this option to the array
    app.options.push(option);
    //clear out the text box
    event.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
}

const appRoot = document.getElementById('app');

render();
