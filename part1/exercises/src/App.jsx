import {useState} from "react";

const App = () => {

    const [goodCount, setGoodCount] = useState(0)
    const [neutralCount, setNeutralCount] = useState(0)
    const [badCount, setBadCount] = useState(0)

    const incGoodCount = () => {
        setGoodCount(goodCount + 1);
    }

    const incNeutralCount = () => {
        setNeutralCount(neutralCount + 1)
    }

    const incBadCount = () => {
        setBadCount(badCount + 1)
    }

    return (
        <>
            <Header headerText={'give feedback'}></Header>

            <Button buttonFunction={incGoodCount} buttonText={'good'}> </Button>
            <Button buttonFunction={incNeutralCount} buttonText={'neutral'}></Button>
            <Button buttonFunction={incBadCount} buttonText={'bad'}></Button>

            <Header headerText={'statistics'}></Header>

            <StatDisplay statName={'good'} stat={goodCount}></StatDisplay>
            <StatDisplay statName={'neutral'} stat={neutralCount}></StatDisplay>
            <StatDisplay statName={'bad'} stat={badCount}></StatDisplay>

        </>
    )
}

const Header = ({headerText}) => {
    return (
        <h1>{headerText}</h1>
    )
}

const StatDisplay = ({statName, stat}) => {
    return (
        <div>{statName} {stat}</div>
    )
}

const Button = ({buttonFunction, buttonText}) => {
    return (
        <button onClick={buttonFunction}>
            {buttonText}
        </button>
    )
}

export default App