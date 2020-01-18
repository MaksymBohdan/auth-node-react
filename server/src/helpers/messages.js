const ERROR = 'ERROR';
const SUCCESS = 'SUCCESS';
const STATUS_ERROR = { status: ERROR };
const STATUS_SUCCESS = { status: SUCCESS };
const SERVER_ERROR = { content: 'Server error', status: ERROR };
const ACCOUNT_ACTIVATED = {
  status: ERROR,
  content: 'This account is activated. Please sign up'
};
const PERSON_EXIST = {
  status: ERROR,
  content: 'Person already exists'
};
const VERIFICATION_MSG = {
  content: 'Please, check the mail box to verify your account',
  status: SUCCESS
};
const ACCOUNT_NOT_EXIST = {
  status: ERROR,
  content: 'This account does not exist. Please create new one'
};

const WRONG_PASSWORD_OR_EMAIL = {
  status: ERROR,
  content: 'Wrong email or password'
};

module.exports = {
  STATUS_ERROR,
  STATUS_SUCCESS,
  SERVER_ERROR,
  VERIFICATION_MSG,
  PERSON_EXIST,
  ACCOUNT_ACTIVATED,
  ACCOUNT_NOT_EXIST,
  WRONG_PASSWORD_OR_EMAIL
};
