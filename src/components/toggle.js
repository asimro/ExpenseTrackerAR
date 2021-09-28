import './App.css';
import { useState } from 'react';

function Toggle() {
    const [toggleValue, settoggleValue] = useState(false);

    return (
        <div>
            {
                toggleValue ? "This is true" : "This is false"
            }
             <br />
             <div className={toggleValue ? "green" : "red"}>

             </div>
            <button onClick={() => settoggleValue(!toggleValue)}>
               <div className="button"> Toggle </div>
            </button>
        </div>
    )
}
export default Toggle;