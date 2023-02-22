const PersonForm = props=>{
    console.log('PersonForm component rendering')

    return (
        <div>
            <form onSubmit={props.onSubmit}>
            <div>
            name:<input value={props.newName} onChange={props.handleNameInput} />
            </div>
            <div>
            number:<input value={props.newNumber}  onChange={props.handleNumberInput} />
            </div>
            <div>
            <button type="submit">submit</button>
            </div>
        </form>
        </div>
    )
}

export default PersonForm;