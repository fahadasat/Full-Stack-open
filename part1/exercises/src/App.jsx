const App = () => {
    const course = 'Half Stack application development'

    const parts = [
        {
            title: 'Fundamentals of React',
            exercises: 10
        },
        {
            title: 'Using props to pass data',
            exercises: 10
        },
        {
            title: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <>
            <Header course={course}/>

            <Content parts={parts}/>

            <Total parts={parts}/>
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
            <Part title={props.parts[0].title} exercises={props.parts[0].exercises}/>
            <Part title={props.parts[1].title} exercises={props.parts[1].exercises}/>
            <Part title={props.parts[2].title} exercises={props.parts[2].exercises}/>
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
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>

    )
}

export default App