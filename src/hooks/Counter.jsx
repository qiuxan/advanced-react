import React, { useState, Fragment } from 'react';
import { useDocumentTitle } from './useDocumentTitle';

function Counter(props) {
    // const array = useState(0);
    // const count = array[0]; //this.state.count
    // const setState = array[1];//this.setState()
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');


    useDocumentTitle(`${name} has clicked count ${count} times`);
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