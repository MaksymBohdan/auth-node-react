const Person = require('../models/person');

const personDeleteRoute = (req, res) => {
  const {
    personData: { _id },
  } = req.body;

  Person.findByIdAndDelete(_id)
    .then(res.status(200).json({ person: null }))
    .catch(err =>
      res.status(404).json({ error: err, status: 'Person not found' }),
    );
};

module.exports = personDeleteRoute;
