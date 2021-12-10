import { useState } from 'react';
const TextInput = () => {
    const [input, setInput] = useState('');

    const onSearchClick = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
    }

    return (
        <form onSubmit={onSearchClick}>
            <input value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button>Search</button>
        </form>
    )
}

export default TextInput;