const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  const renderedParts = course.parts.map((part) => {
    return <Part key={part.id} part={part}></Part>;
  });

  return renderedParts;
};

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return <h4>total of {totalExercises} exercises</h4>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </div>
  );
};

export default Course;
