const Header =({name})=>{
    return <h2>{name}</h2>
  }
  const Content = ({parts})=>parts.map(part=><Part part={part} key={part.id} />)
  const Part = ({part})=><p>{part.name} {part.exercises}</p>
  const Summary = ({parts})=><p style={{fontWeight:"bold"}}> total of {parts.reduce((sum,part)=>sum+part.exercises,0)} exercises</p>
  const Course = ({course})=>{
  
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Summary parts={course.parts} />
      </div>
    )
  }

  export default Course;