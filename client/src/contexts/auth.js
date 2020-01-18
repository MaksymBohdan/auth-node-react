import React, { Component, createContext } from 'react';
import { signUp, personAuth, personDelete } from '../services';
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

  // onAuth = (credentials, isRegistration, setSubmitting) => {
  //   personAuth(credentials, isRegistration)
  //     .then(({ person, token }) => {
  //       saveToStorage(TOKEN, token);
  //       saveToStorage(PERSON, person);

  //       this.setState({ person, token });
  //     })
  //     .catch(({ response }) => {
  //       this.context.handleShowNotification(response.data.status);
  //     })
  //     .finally(() => setSubmitting(false))

  // };

  onSignUp = (credentials, setSubmitting) => {
    signUp(credentials)
      .then(response => this.context.handleShowNotification(response))
      .catch(({ response }) =>
        this.context.handleShowNotification(response.data)
      )
      .finally(() => setSubmitting(false));
  };

  clearAuthData = () => {
    clearStorage();
    this.setState({ person: null, token: null });
  };

  onPersonDelete = token => {
    personDelete(token)
      .then(person => {
        if (!person) this.clearAuthData();
      })
      .catch(({ response }) => {
        this.context.handleShowNotification(response.data);
      });
  };

  render() {
    const { person, token } = this.state;

    return (
      <AuthContext.Provider
        value={{
          person,
          token,
          onSignUp: this.onSignUp,
          onAuth: this.onAuth,
          onSignOut: this.clearAuthData,
          onPersonDelete: this.onPersonDelete
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
