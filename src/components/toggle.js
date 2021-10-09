import './App.css';
import { useState } from 'react';

function Toggle() {
    const [toggleValue, settoggleValue] = useState(false);

    return (

        <div className={"div2"}>

            <div className={toggleValue ? "green" : "red"}>
                {
                    toggleValue ? "This is true" : "This is false"
                }
            </div>
           
            <button onClick={() => settoggleValue(!toggleValue)}>
                <div className="button"> Toggle </div>
            </button>
        </div>

    )
}
export default Toggle;