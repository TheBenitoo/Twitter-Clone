import React, {useState, useEffect} from 'react'




function Examples() {

    const [buttonClicked, setButtonClick] = useState(0);

    useEffect(() => {}, [])



    return (
        <div>

            <h1>{buttonClicked}</h1>
            <button onClick={() => setButtonClick(buttonClicked + 1)}>Click me</button>
        </div>
    )
}

export default Examples
