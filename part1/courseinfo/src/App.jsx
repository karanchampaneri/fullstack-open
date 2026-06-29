const App = () => {

  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]
  return (
    <div>
      <Header course = 'Half Stack application development' />
      
      <Parts part={parts[0]} exercise={exercises[0]} />
      <Parts part={parts[1]} exercise={exercises[1]} />
      <Parts part={parts[2]} exercise={exercises[2]} /> 
      
      <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
    </div>
  )
}

const Header = ({course}) =>{
  return (
      <h1>{course}</h1>
  )
}

const Parts = ({part, exercise}) =>{
  return (
      <p>
        {part} {exercise}
      </p>
  )
}

export default App