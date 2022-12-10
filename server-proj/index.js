const http = require('http');
const express = require('express');
const app = express();
//using da express json parser
app.use(express.json());

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2022-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2022-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2022-05-30T19:20:14.298Z',
    important: true,
  },
];

app.get('/', (request, response) => {
  response.send('<h1>Hello World! :3:3</h1>');
});

app.get('/api/notes', (request, response) => {
  response.json(notes);
});

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find(note => note.id === id);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

// delete request thing
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id);

  response.status(204).end();
});

const generateId = () => {
  // basically checks the array of notes length and sets it as the stuffing idk man how it works
  // check here for da explanation of THIS CODE: https://fullstackopen.com/en/part3/node_js_and_express (just scroll down and stuff)
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
  return maxId + 1
}

// adding stuff to da server
app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) { //if missing body content. Because js objects are truthy
    return response.status(400).json({
      error: 'content not found'
    })
  }

  const note = {
    content: body.content,
    important: body.important || false, // if the important property do be missing defaults to false YUP
    date: new Date(),
    id: generateId(),
  }

  notes = notes.concat(note)
  response.json(note)
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
