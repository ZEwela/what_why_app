import './App.css';

export function Base(props) {
  return (
    <div className="base" >
      <h1>What? Why?</h1>
      <input type='text' onChange={props.handleChange} value={props.userInput}/>
    </div>
  );
}

