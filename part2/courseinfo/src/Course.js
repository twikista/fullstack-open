const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => {
  const sum = parts.reduce((cum, cur) => cum + cur.exercises, 0);
  return <h4>total of {sum} exercises </h4>;
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Course = ({ course }) => {
  const { name, parts } = course;
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default Course;
