import Grandchild from "./Grandchild";
import { useState } from 'react';

function Child() {
    const [counterValue, setcounterValue] = useState(10)
    return (
        <div>
            <h3>Counter </h3>
            <p>
                {counterValue}
                <br />
                <button onClick={() => setcounterValue(counterValue + 1)}>
                    Increment
                </button>

                <button onClick={() => setcounterValue(counterValue - 1)}>
                    Decrement
                </button>

                <button onClick={() => setcounterValue(0)}>
                    Rest
                </button>
                <br />
            </p>
            <Grandchild />
        </div>
    )
}
export default Child;