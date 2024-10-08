import {useState} from 'react'

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAllClicks] = useState([])
    const [buttonPressCount, setButtonPressCount] = useState(0)

    // const incLeftCount = () => {
    //     setAllClicks(allClicks.concat('L'))
    //     const updatedLeft = left + 1
    //     setLeft(updatedLeft)
    //     setButtonPressCount(updatedLeft + right)
    // }

    const incRightCount = () => {
        setAllClicks(allClicks.concat('R'))
        const updatedRight = right + 1
        setRight(updatedRight)
        setButtonPressCount(left + updatedRight)
    }

    return (
        <div>
            {left}
            <Button
                buttonFunction={() => {
                    setAllClicks(allClicks.concat('L'))
                    const updatedLeft = left + 1
                    setLeft(updatedLeft)
                    setButtonPressCount(updatedLeft + right)
                }}
                buttonText={'Left'}
            ></Button>
            <Button buttonFunction={incRightCount} buttonText={'Right'}></Button>
            {right}
            <History allClicks={allClicks}/>
            <p> Total Presses: {buttonPressCount} </p>
        </div>

    )
}

const Button = ({buttonFunction, buttonText}) => {
    return (
        <button onClick={buttonFunction}>
            {buttonText}
        </button>
    )
}

const History = (props) => {
    if (props.allClicks.length > 0) {
        return (
            <p> Button History: {props.allClicks.join(' ')} </p>
        )
    }
    return (<p></p>)
}

// const Hello = ({name, age}) => {
//
//     const bornYear = () => new Date().getFullYear() - age
//
//     return (
//         <div>
//             <p>
//                 Hello {name}, you are {age} years old
//             </p>
//             <p>
//                 So you were probably born in {bornYear()}
//             </p>
//         </div>
//     )
// }

export default App