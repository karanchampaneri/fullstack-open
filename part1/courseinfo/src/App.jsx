const App = () => {

  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]
  return (
    <div>
      <Header course = 'Half Stack application development' />
      <Content parts = {parts} exercises = {exercises} />
      <Total exercises = {exercises}></Total>

    </div>
  )
}

const Header = ({course}) =>{
  return (
      <h1>{course}</h1>
  )
}

const Part = ({part, exercise}) =>{
  return (
      <p>
        {part} {exercise}
      </p>
  )
}

const Content = ({parts, exercises}) => {
  return(
    <div>
      <Part part={parts[0]} exercise={exercises[0]} />
      <Part part={parts[1]} exercise={exercises[1]} />
      <Part part={parts[2]} exercise={exercises[2]} />
    </div>
  )
}

const Total = ({exercises}) =>{
  return (
      <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]} </p>
  )
}

export default App