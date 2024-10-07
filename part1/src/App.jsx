import {useState} from 'react'

const App = () => {
    const [counts, setCounts] = new useState({
        left: 0,
        right: 0
    })

    const incLeftCount = () => {
        setCounts({
            ...counts,
            left: counts.left + 1
        })
    }

    const incRightCount = () => {
        setCounts({
            ...counts,
            right: counts.right + 1
        })
    }

    // const [counter, setCounter] = useState(0)
    //
    // const Display = ({counter}) => <div>{counter}</div>
    //
    // const Button = ({onButtonClick, buttonTitle}) => <button onClick={onButtonClick}> {buttonTitle} </button>
    //
    // const increaseCounter = () => {
    //     setCounter(counter + 1)
    //     console.log(counter + 1)
    // }
    //
    // const decreaseCounter = () => {
    //     setCounter(counter - 1)
    //     console.log(counter - 1)
    // }
    //
    // const resetCounter = () => {
    //     setCounter(0)
    //     console.log(0)
    // }

    return (
        <div>
            {counts.left}
            <button onClick={() => incLeftCount()}>
                left
            </button>
            <button onClick={() => incRightCount()}>
                right
            </button>
            {counts.right}

            {/*<Display counter={counter}> </Display>*/}
            {/*<br/>*/}
            {/*<Button onButtonClick={increaseCounter} buttonTitle='Add'/>*/}
            {/*<Button onButtonClick={decreaseCounter} buttonTitle='Subtract'/>*/}
            {/*<Button onButtonClick={resetCounter} buttonTitle='Reset'/>*/}
        </div>

    )
}

const Hello = ({name, age}) => {

    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>
                So you were probably born in {bornYear()}
            </p>
        </div>
    )
}

export default App