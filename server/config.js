require('dotenv').config();

const { PORT, DB_USER, DB_PASS, SECRET_KEY, SG_MAIL_API_KEY } = process.env;

const confiq = {
  port: PORT,
  url: `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-mvo7w.mongodb.net/test?retryWrites=true&w=majority`,
  secretKey: SECRET_KEY,
  sgMailApiKey: SG_MAIL_API_KEY
};

module.exports = confiq;
