const PersonForm = props => {
  return (
  <div>
    <form onSubmit={props.addPerson}>
      <div>
        name:{' '}
        <input onChange={props.handlePersonChange} value={props.newName} />
      </div>
      <div>
        number:{' '}
        <input onChange={props.handleNumberChange} value={props.newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
  )
};

export default PersonForm;
