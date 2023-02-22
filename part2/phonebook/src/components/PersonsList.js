import Person from "./Person";
const PersonsList = (props)=>{
    console.log('PersonList component rendering')

    return (
        <div>
            {props.showPersons.map(person=><Person key={person.id} name={person.name} number={person.number} handleDelete={()=>props.handleDelete(person.id)} />)}
        </div>
    )
}

export default PersonsList;