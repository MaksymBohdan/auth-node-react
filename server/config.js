require('dotenv').config();

const {
  PORT,
  DB_USER,
  DB_PASS,
  SECRET_KEY,
  SG_MAIL_API_KEY,
  FB_GRAPH_URL_MAIN,
  FB_GRAPH_URL_REST_PARAMS,
  GOOGLE_API_URL
} = process.env;

const confiq = {
  port: PORT,
  url: `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-mvo7w.mongodb.net/test?retryWrites=true&w=majority`,
  secretKey: SECRET_KEY,
  sgMailApiKey: SG_MAIL_API_KEY,
  fbGraphUrlMain: FB_GRAPH_URL_MAIN,
  fbGraphUrlRestParams: FB_GRAPH_URL_REST_PARAMS,
  googleApiUrl: GOOGLE_API_URL
};

module.exports = confiq;
