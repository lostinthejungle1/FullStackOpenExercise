import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import personService from './services/person'
import Notification from "./components/Notification";

const App =()=>{
  console.log('App component rendering')

  const [persons,setPersons] = useState([]);

  const [showPersons,setShowPersons]=useState(persons);

  const [newName,setNewName] = useState('');
  const [newNumber,setNewNumber] = useState('');
  const [notify,setNotify]= useState({message:null,type:'success'})
  useEffect(()=>{
    personService.getAll()
    .then(data=>{
      console.log(data)
      setPersons(data)
      setShowPersons(data)
    })
  },[])

  const handleNameInput = e=>{
    setNewName(e.target.value);
  }
  const handleNumberInput = e=>{
    setNewNumber(e.target.value);
  }

  const handleFormSubmit = e=>{
    e.preventDefault();
    if(whetherNameExist(newName)){
      if(window.confirm(`${newName} has already been added to the phonebook, replace the old number with the new one?`)){
        const targetPerson = persons.find(p=>p.name===newName);
        const newObj ={...targetPerson,number:newNumber};
        console.log(targetPerson);
        personService.updateNumber(targetPerson.id,newObj)
        .then(data=>{
          const newList = persons.map(p=>p.id===data.id?data:p);
          setPersons(newList);
          setShowPersons(newList);
          setNotify({message:`Updated ${data.name}`,type:'success'})
          setTimeout(()=>setNotify({message:null,type:null}),5000)
        }).catch(err=>{
          console.log(err)
          setNotify({message:`${newName} has already been removed from the server`,type:'error'})
          setTimeout(()=>setNotify({message:null,type:null}),5000)
          const newList = persons.filter(p=>p.id!==targetPerson.id)
          setPersons(newList)
          setShowPersons(newList)
        })
      }
      setNewName('')
      setNewNumber('')
    }else{
      const newObj ={
        name:newName,
        number:newNumber
      }
      personService.create(newObj).then(data=>{
        const newList = persons.concat(data)
        setPersons(newList)
        setShowPersons(newList);
        setNewName('')
        setNewNumber('')
        setNotify({message:`Added ${data.name}`,type:'success'})
        setTimeout(()=>setNotify({message:null,type:null}),5000)
      }).catch(error=>console.log(error))
      
    }
    
  }
  const whetherNameExist = (name)=>{
    return persons.filter(person=>person.name===name).length;
  }

  const handleFilterInput = e=>{
    const filterResult = persons.filter(person=>person.name.toUpperCase().includes(e.target.value.toUpperCase()))
    setShowPersons(filterResult);
  }

  const handleDelete = (id)=>{
    const targetPerson = persons.find(p=>p.id===id);
    if(window.confirm(`are you sure you want to delete ${targetPerson.name}`)){
      console.log(`id ${id} will be deleted`)
      personService.deletePerson(id).then(data=>{
        console.log(data);
        const newList = persons.filter(p=>p.id!==id)
        setPersons(newList);
        setShowPersons(newList);
      }).catch(err=>console.log(err))
    }
    
  }
  return (
    <div>
      <h2>phonebook</h2>
      <Notification message={notify.message} type={notify.type} />
      <Filter onChange={handleFilterInput}  />
      <h2>Add a new</h2>
      <PersonForm onSubmit={handleFormSubmit} newName={newName} newNumber={newNumber} handleNumberInput={handleNumberInput} handleNameInput={handleNameInput}/>
      <h2>numbers</h2>
      <PersonsList showPersons={showPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App;