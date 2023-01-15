const meetingsRouter = require('express').Router();
const {
  getAllFromDatabase,
  createMeeting,
  addToDatabase,
  deleteAllFromDatabase
} = require('./db');

meetingsRouter.get('/', (req, res, next) => {
  const meetings = getAllFromDatabase('meetings');
  if (meetings) {
    res.send(meetings);
  } else {
    res.status(404).send();
  }
});

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
    if (newMeeting) {
      res.status(201).send(newMeeting);
    } else {
      res.status(400).send()
    }
});

meetingsRouter.delete('/', (req, res, next) => {
  const deleted = deleteAllFromDatabase('meetings');
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).send();
  };
})

module.exports = meetingsRouter;
