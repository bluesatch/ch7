// import React, { useState, useEffect } from 'react'

// other option useReducer 
import React, { useReducer } from 'react';



const Checkbox =()=> {
    // const [checked, setChecked] = useState(false);
    const [checked, toggle] = useReducer(checked => !checked, false);

    // alert(`checked: ${checked.toString()}`);
    // alert pops up before the render

    // const toggle =()=> {
    //     setChecked(checked => !checked);
    // }

    // useEffect(()=> {
    //     console.log(checked ? "Yes, checked" : "No, not checked");
    // });

    return (
        <div>
            <input
                type='checkbox'
                value={checked}
                onChange={toggle}
            />
            {checked ? "checked" : "not checked"}
            <h2>{checked}</h2>
        </div>
    )
}

export default Checkbox;