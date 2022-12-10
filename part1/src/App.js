import './App.css';

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
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
  )

}
const Total = (props) => {

    return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  );

}

const App = () => {
  let course = 'Half Stack Development'
  return (
    <div>
      <Header course={course} />
      <Content exercises1={10} exercises2={7} exercises3={14} part1='Fundamentals of React' part2='Using props to pass data' part3='State of a Component'/>
      <Total exercises1={10} exercises2={7} exercises3={14}/>
    </div>
  )

};

export default App;
