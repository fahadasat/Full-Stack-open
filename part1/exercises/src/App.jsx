import {useState} from "react";

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [anecdoteNumber, setAnecdoteNumber] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const [highestVotedAnecdote, setHighestVotedAnecdote] = useState(0)

    const onClickNewAnecdote = () => {
        setAnecdoteNumber(Math.floor(Math.random() * anecdotes.length))
    }

    const onClickVote = () => {
        const updatedVotes = [...votes]
        updatedVotes[anecdoteNumber] += 1
        setVotes(updatedVotes)
        if (updatedVotes[anecdoteNumber] > updatedVotes[highestVotedAnecdote])
            setHighestVotedAnecdote(anecdoteNumber)
    }

    return (
        <>
            <Headers title={'Anecdote of the day'}></Headers>
            <Anecdote anecdotes={anecdotes} anecdoteNumber={anecdoteNumber} votes={votes}></Anecdote>
            <div>
                <Button buttonFunction={onClickVote} buttonName={'vote'}></Button>
                <Button buttonFunction={onClickNewAnecdote} buttonName={'next anecdote'}></Button>
            </div>

            <Headers title={'Anecdote with the most votes'}></Headers>
            <Anecdote anecdotes={anecdotes} anecdoteNumber={highestVotedAnecdote} votes={votes}></Anecdote>
        </>
    )
}

const Headers = ({title}) => {
    return (
        <h1>
            {title}
        </h1>
    )
}

const Anecdote = ({anecdotes, anecdoteNumber, votes}) => {

    if (votes[anecdoteNumber] > 0) {
        return (
            <>
                <div>
                    {anecdotes[anecdoteNumber]}
                </div>
                <div>
                    has {votes[anecdoteNumber]} votes
                </div>
            </>
        )
    } else {
        return (
            <>
                {anecdotes[anecdoteNumber]}
            </>
        )
    }
}

const Button = ({buttonFunction, buttonName}) => {
    return (
        <>
            <button onClick={buttonFunction}> {buttonName} </button>
        </>
    )
}

export default App