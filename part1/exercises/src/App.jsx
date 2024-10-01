const App = () => {
    const course = 'Half Stack application development'

    const content = {
        part1: {
            title: 'Fundamentals of React',
            exercises: 10
        },
        part2: {
            title: 'Using props to pass data',
            exercises: 10
        },
        part3: {
            title: 'State of a component',
            exercises: 14
        }
    }

    return (
        <>
            <Header course={course}/>

            <Content title={content.part1.title} exercises={content.part1.exercises}/>
            <Content title={content.part2.title} exercises={content.part2.exercises}/>
            <Content title={content.part3.title} exercises={content.part3.exercises}/>

            <Total exercises1={content.part1.exercises} exercises2={content.part2.exercises}
                   exercises3={content.part3.exercises}/>
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