import { useState } from 'react';

export const Button = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Click me: {count}</button>
        </div>
    );
};

export default Button;