const Header = (props)=>{
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part = (props)=>{
  return (
    <div>
      <p>{props.name} {props.exeNum}</p>
    </div>
  )
}
const Content = (props) =>{
  return (
    <div>
      {
        props.parts.map(part=>(<Part key={part.name} name={part.name} exeNum={part.exercises} />))
      }
    </div>
  )
}

const Total = (props)=>{
  return (
    <div>
      <p>Total number of exercises: {props.parts.reduce((accu,curr)=>accu+curr.exercises,0)}</p>
    </div>
  )
}

const App = ()=>{
  const course ={
    name:'Half Stack application development',
    parts:[
    {name:'Fundamentals of React',exercises:10},
    {name:'Using props to pass data',exercises:7},
    {name:'State of a component',exercises:14},
  ]
  }
  
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}  />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
