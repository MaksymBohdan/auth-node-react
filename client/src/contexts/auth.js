import React, { Component, createContext } from 'react';
import { personCreate } from '../services/authService';
import {
  saveToStorage,
  getFromStorage,
  clearStorage
} from '../utils/localStorageUtils';
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

        this.setState({ person, token });
      })
      .catch(({ response }) => {
        this.context.handleShowNotification(response.data.status);
        setSubmitting(false);
      });
  };

  onSignOut = () => {
    clearStorage();
    this.setState({ person: null, token: null });
  };

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

export default AuthContextProvider;
