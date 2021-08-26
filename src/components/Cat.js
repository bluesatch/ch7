import React from 'react';


const Cat =({ name })=> {
    console.log(`rendering ${name}`);

    const meow =({name})=> {
        console.log(`${name} has meowed`)
    }

    return <p onClick={()=> meow({name})}>{name}</p>;
}

export default Cat;