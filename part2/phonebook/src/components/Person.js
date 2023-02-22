const Person =(props)=>{
    console.log('Person component rendering')
    return (
        <div>
            <p>{props.name} {props.number} <button onClick={props.handleDelete} style={{marginLeft:'5px'}}>delete</button></p>
        </div>
    )
}

export default Person;