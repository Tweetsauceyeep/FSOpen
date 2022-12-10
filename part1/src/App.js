import './App.css';

const Header = props => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Content = props => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
};
const Total = props => {
  return (
    <div>
      <p>
        Number of exercises{' '}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using Props to Pass Data',
        exercises: 7,
      },
      {
        name: 'State of the component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
