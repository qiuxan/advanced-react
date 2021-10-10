import React, { useState, useEffect, Fragment } from 'react';

function Counter(props) {
    // const array = useState(0);
    // const count = array[0]; //this.state.count
    // const setState = array[1];//this.setState()
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(
        () => {
            document.title = `${name} has clicked ${count} times`;
            return () => {
                console.log('clean up code');
            }
        }, [name, count]);

    //componentDidMount
    //componentDidUpdate
    // componentWillUnmount   use return ()=>{} in useEffect function

    return (
        <Fragment>
            <input type="text" onChange={e => setName(e.target.value)} />
            <div>
                {name} has clicked Counter {count} tiems.
            </div>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
        </Fragment>
    );
}

export default Counter;