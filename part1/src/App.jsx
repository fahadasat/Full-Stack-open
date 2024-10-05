import {useState} from 'react'

const App = () => {
    const [counter, setCounter] = useState(0)

    const Display = ({counter}) => <div>{counter}</div>

    const Button = ({onButtonClick, buttonTitle}) => <button onClick={onButtonClick}> {buttonTitle} </button>

    const increaseCounter = () => {
        setCounter(counter + 1)
        console.log(counter + 1)
    }

    const decreaseCounter = () => {
        setCounter(counter - 1)
        console.log(counter - 1)
    }

    const resetCounter = () => {
        setCounter(0)
        console.log(0)
    }

    return (
        <div>
            <Display counter={counter}> </Display>
            <br/>
            <Button onButtonClick={increaseCounter} buttonTitle='Add'/>
            <Button onButtonClick={decreaseCounter} buttonTitle='Subtract'/>
            <Button onButtonClick={resetCounter} buttonTitle='Reset'/>
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