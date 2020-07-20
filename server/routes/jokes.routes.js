const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.post('/api/jokes/new', JokesController.createJoke);
    app.get('/api/jokes/', JokesController.getAllJokes);
    app.get('/api/jokes/:id', JokesController.getOneJoke);
    app.get('/api/jokes/random', JokesController.getRandomJoke);
    app.put('/api/jokes/:id', JokesController.updateJoke);
    app.delete('/api/jokes/delete/:id', JokesController.deleteJoke)

}