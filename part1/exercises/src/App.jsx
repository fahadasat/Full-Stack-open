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

            <StateDisplay allCount={allCount} goodCount={goodCount} neutralCount={neutralCount} badCount={badCount}
                          averageFeedback={averageFeedback} positivePercent={positivePercent}> </StateDisplay>
        </>
    )
}

const Header = ({headerText}) => {
    return (
        <h1>{headerText}</h1>
    )
}

const StateDisplay = ({allCount, goodCount, neutralCount, badCount, averageFeedback, positivePercent}) => {
    if (allCount > 0) {
        return (
            <table>
                <tbody>
                <SingleStatDisplay statName={'good'} stat={goodCount}></SingleStatDisplay>
                <SingleStatDisplay statName={'neutral'} stat={neutralCount}></SingleStatDisplay>
                <SingleStatDisplay statName={'bad'} stat={badCount}></SingleStatDisplay>
                <SingleStatDisplay statName={'all'} stat={allCount}></SingleStatDisplay>
                <SingleStatDisplay statName={'average'} stat={averageFeedback}></SingleStatDisplay>
                <SingleStatDisplay statName={'positive'} stat={positivePercent + ' %'}></SingleStatDisplay>
                </tbody>
            </table>
        )
    }
    return (
        <>
            No feedback given
        </>
    )
}

const SingleStatDisplay = ({statName, stat}) => {
    return (
        <tr>
            <td>
                {statName}
            </td>
            <td>
                {stat}
            </td>
        </tr>
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