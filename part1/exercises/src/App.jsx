import {useState} from "react";

const App = () => {

    const [goodCount, setGoodCount] = useState(0)
    const [neutralCount, setNeutralCount] = useState(0)
    const [badCount, setBadCount] = useState(0)
    const [allCount, setAllCount] = useState(0)
    const [averageFeedback, setAverageFeedback] = useState(0)
    const [positivePercent, setPositivePercent] = useState(0)

    const incGoodCount = () => {
        //increase allCount + 1 or practice dealing with async
        const newGoodCount = goodCount + 1
        setGoodCount(newGoodCount);
        setAllCount(newGoodCount + neutralCount + badCount)
        setAverageFeedback((newGoodCount - badCount) / (newGoodCount + neutralCount + badCount))
        setPositivePercent(newGoodCount / (newGoodCount + neutralCount + badCount) * 100)
    }

    const incNeutralCount = () => {
        const newNeutralCount = neutralCount + 1
        setNeutralCount(newNeutralCount)
        setAllCount(goodCount + newNeutralCount + badCount)
        setAverageFeedback((goodCount - badCount) / (goodCount + newNeutralCount + badCount))
        setPositivePercent(goodCount / (goodCount + newNeutralCount + badCount) * 100)
    }

    const incBadCount = () => {
        const newBadCount = badCount + 1
        setBadCount(newBadCount)
        setAllCount(goodCount + neutralCount + newBadCount)
        setAverageFeedback((goodCount - newBadCount) / (goodCount + neutralCount + newBadCount))
        setPositivePercent(goodCount / (goodCount + neutralCount + newBadCount) * 100)
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
            <StatDisplay statName={'all'} stat={allCount}></StatDisplay>
            <StatDisplay statName={'average'} stat={averageFeedback}></StatDisplay>
            <StatDisplay statName={'positive'} stat={positivePercent + ' %'}></StatDisplay>

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