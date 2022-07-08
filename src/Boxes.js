import './App.css';

export function Boxes (props) {
    return(
        <div className="boxes">
            {props.boxesNames.map((boxName, index) => 
                <button onClick={props.handleSubmit} className="button" key={index} name={index} value={boxName.name}>{boxName.name}</button>
            )}
        </div>
    )
}