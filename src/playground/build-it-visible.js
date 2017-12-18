let visibility = false;
const render = () => {
  
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleMe}>{ visibility ? 'Hide Details' : 'Show Details' }</button>
      { visibility && (
        <div>
          <p>Hey you wanted to see this!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};

const toggleMe = () => {
  visibility = !visibility;
  render();
}

render();
