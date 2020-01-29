const Person = require('../models/person');
const { ACCOUNT_NOT_EXIST, SERVER_ERROR } = require('../helpers/messages');

const fileUploadRoute = (req, res) => {
  const { file, body } = req;
  const { personId } = body;

  Person.findByIdAndUpdate({ _id: personId }, { imageUrl: file.path })
    .exec()
    .then(updatedPerson => {
      if (!updatedPerson) return res.status(409).json(ACCOUNT_NOT_EXIST);

      const { email, name, _id, imageUrl } = updatedPerson;

      console.log(updatedPerson);
      
      res.status(200).json({ person: { email, name, _id, imageUrl } });
    })
    .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
};

module.exports = fileUploadRoute;
