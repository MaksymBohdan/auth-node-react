const multer = require('multer');
const path = require('path');

const uploadPath = path.join(__dirname, '../uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) =>
    cb(null, new Date().toISOString() + file.originalname),
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg')
    return cb(null, true);

  return cb(new Error('unacceptable file type'));
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});

const uploadMiddleware = upload.single('img');

module.exports = uploadMiddleware;
