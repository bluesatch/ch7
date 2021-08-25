import React, { useEffect, useMemo } from 'react';
import { useAnyKeyToRender } from '../hooks/useAnyKeyToRender';

const WordCount =({ children = ''})=> {
    useAnyKeyToRender();

    // const words = useMemo(() => {
    //     const words = children.split(' ');
    //     return words;
    // }, []);

    const words = useMemo(() => children.split(' '), [children]);

    useEffect(()=> {
        console.log('fresh render');
    }, [words]);

    return (
        <div>
            <p>{children}</p>
            <p className="bold">{words.length} - words</p>
        </div>
    )
}

export default WordCount;