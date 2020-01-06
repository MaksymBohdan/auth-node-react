import React, { Component, createContext } from 'react';
import { withRouter } from 'react-router-dom';
import { personCreate } from '../services/authService';
import { saveToStorage, getFromStorage } from '../utils/localStorageUtils';
import { PERSON, TOKEN } from '../helpers/localStorageConstans';
import { NotificationContext } from './notifications';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    person: getFromStorage(PERSON, null),
    token: getFromStorage(TOKEN, null)
  };

  static Consumer = AuthContext.Consumer;

  static contextType = NotificationContext;

  onSignUp = (credentials, setSubmitting) => {
    personCreate(credentials)
      .then(({ person, token }) => {
        saveToStorage(TOKEN, token);
        saveToStorage(PERSON, person);

        this.setState({ person, token }, () => this.props.history.replace('/'));
      })
      .catch(({ response }) => {
        this.context.handleShowNotification(response.data.status);
        setSubmitting(false);
      });
  };

  onSignOut = () => () => this.setState({ person: null });

  render() {
    const { person, token } = this.state;

    return (
      <AuthContext.Provider
        value={{
          person,
          token,
          onSignUp: this.onSignUp,
          onSignOut: this.onSignOut
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default withRouter(AuthContextProvider);
