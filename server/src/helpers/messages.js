const ERROR = 'ERROR';
const SUCCESS = 'SUCCESS';
const STATUS_ERROR = { status: ERROR };
const STATUS_SUCCESS = { status: SUCCESS };
const SERVER_ERROR = { content: 'Server error', status: ERROR };
const ACCOUNT_ACTIVATED = {
  status: ERROR,
  content: 'This account is activated. Please sign in',
};
const PERSON_EXIST = {
  status: ERROR,
  content: 'Person already exists',
};
const VERIFICATION_MSG = {
  content: 'Please, check the mail box to verify your account',
  status: SUCCESS,
};

const PASSWORD_RESET_MSG = {
  content: 'Please, check the mail box to reset your password',
  status: SUCCESS,
};

const ACCOUNT_NOT_EXIST = {
  status: ERROR,
  content: 'This account does not exist. Please create new one',
};

const WRONG_PASSWORD_OR_EMAIL = {
  status: ERROR,
  content: 'Wrong email or password',
};

const INVALID_TOKEN = {
  status: ERROR,
  content: 'This token is invalid. Please reset the password again',
};

const PASSWORD_CHANGED = {
  content: 'Your password has changed. Please, sign in',
  status: SUCCESS,
};

module.exports = {
  STATUS_ERROR,
  STATUS_SUCCESS,
  SERVER_ERROR,
  VERIFICATION_MSG,
  PERSON_EXIST,
  ACCOUNT_ACTIVATED,
  ACCOUNT_NOT_EXIST,
  WRONG_PASSWORD_OR_EMAIL,
  PASSWORD_RESET_MSG,
  INVALID_TOKEN,
  PASSWORD_CHANGED,
};
