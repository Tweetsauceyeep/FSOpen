const NumbersList = ({persons, search}) => {
  return (
    <div>
      {persons
        .filter(person => {
          return search.toLowerCase() === ''
            ? person
            : person.name.toLowerCase().includes(search);
        })
        .map(person => (
          <div key={person.id}>
            {person.name} {person.number}
          </div>
        ))}
    </div>
  );
};
//const NumbersList = ({persons, search}) => {
//  return (
//    <div>
//      {persons
//        .map(person => (
//          <div key={person.id}>
//            {person.name} {person.number}
//          </div>
//        ))}
//    </div>
//  );
//};

export default NumbersList;
