const {request, response} = require('express');
const express = require('express');
const app = express();

app.use(express.json());

let numbers = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

app.get('/', (request, response) => {
  response.send('<h1>DA PAGE</h1>');
});

app.get('/api/persons', (request, response) => {
  response.json(numbers);
});

app.get('/info', (request, response) => {
  response.send(
    `<div>Phoneboook has info for ${
      numbers.length
    } people</div> <br> <div>${Date()}</div>`,
  );
});

// renders info for single number
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  console.log(id);
  const phoneNum = numbers.find(phoneNum => phoneNum.id === id);
  console.log(phoneNum);
  if (phoneNum) {
    response.json(phoneNum);
  } else {
    response.status(404).end();
  }
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  numbers = numbers.filter(phoneNum => phoneNum.id !== id);
  response.status(204).end();
});

const generateId = () => {
  let id = Math.floor(Math.random() * 1000);
  return id;
};

// post request
app.post('/api/persons', (request, response) => {
  const body = request.body;

  const numInfo = {
    id: generateId(),
    number: body.number,
    name: body.name,
  };

  if (!numInfo.name || !numInfo.number) {
    response.json({error: 'no info or number'});
  } else {
    numbers = numbers.concat(numInfo);
    console.log(numbers);
    response.json(numInfo);
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
