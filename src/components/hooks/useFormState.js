import { useState } from 'react';

const useTextInput = (initialVal = '') => {
    const [text, setText] = useState(initialVal);

    const updateText = (e) => {
        setText(e)
    }

    return [text, updateText]
}

export default useTextInput
