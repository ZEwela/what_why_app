import './App.css';

export function Summary(props) {
    return (
        <>
            <h2 style={{textAlign:'center'}}> Thoughts </h2>
            <ul className="list">
                {props.thougts.map((thought, index) => 
                    <li key={index}> {thought}</li>
                )}
            </ul>
        </>
    )
}