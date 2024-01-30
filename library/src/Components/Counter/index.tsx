import React, { useState, useEffect } from 'react';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('Interactive test component loaded');
    }, []);

    return (
        <div style={{ padding: 16 }}>
            React Version: {React.version}
            <p>{counter}</p>
            <button type="button" onClick={() => setCounter(counter + 1)}>
                Increment
            </button>
            <button type="button" onClick={() => setCounter(counter - 1)}>
                Decrement
            </button>
        </div>
    )
};
