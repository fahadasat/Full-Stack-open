const App = () => {
    const course = 'Half Stack application development'

    const part1 = {
        title: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        title: 'Using props to pass data',
        exercises: 10
    }
    const part3 = {
        title: 'State of a component',
        exercises: 14
    }

    return (
        <>
            <Header course={course}/>

            <Content part1={part1} part2={part2} part3={part3}/>

            <Total exercises1={part1.exercises} exercises2={part2.exercises}
                   exercises3={part3.exercises}/>
        </>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        <>
            <Part title={props.part1.title} exercises={props.part1.exercises}/>
            <Part title={props.part2.title} exercises={props.part2.exercises}/>
            <Part title={props.part3.title} exercises={props.part3.exercises}/>
        </>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.title} {props.exercises}
        </p>

    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>

    )
}

export default App