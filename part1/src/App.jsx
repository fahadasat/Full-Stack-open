const App = () => {
    const name = "billy"
    const nameTwo = "bobby"

    const friends = [
        { name: 'Peter', age: 4 },
        { name: 'Maya', age: 10 },
    ]

    return (
        <>
            <h1>Greetings</h1>
            <Hello name={"bill"} nameTwo={"bob"}/>
            <Hello name={name} nameTwo={nameTwo}/>
            <p>{friends[0].name} {friends[0].age}</p>
            <p>{friends[1].name} {friends[1].age}</p>

        </>
    )
}


const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <p>Hello {props.name} and {props.nameTwo}</p>
        </div>
    )
}

export default App