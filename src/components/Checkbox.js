import React, { useState, useEffect } from 'react'

const Checkbox =()=> {
    const [checked, setChecked] = useState(false);

    // alert(`checked: ${checked.toString()}`);
    // alert pops up before the render

    useEffect(()=> {
        console.log(checked ? "Yes, checked" : "No, not checked");
    });

    return (
        <div>
            <input
                type='checkbox'
                value={checked}
                onChange={()=> setChecked(checked => !checked)}
            />
            {checked ? "checked" : "not checked"}
        </div>
    )
}

export default Checkbox;