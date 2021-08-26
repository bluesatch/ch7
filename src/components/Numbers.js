import React, { useReducer} from 'react' ;

const Numbers =()=> {
    const [number, setNumber] = useReducer(
        (number, newNumber) => number + newNumber,
        0
    );

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(2)}>Click</button>
        </div>
    )
}

export default Numbers;