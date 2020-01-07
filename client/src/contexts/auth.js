import React, { Component, createContext } from 'react';
import { personCreate, personDelete } from '../services';
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

  clearData = () => {
    clearStorage();
    this.setState({ person: null, token: null });
  };

  onPersonDelete = token => {
    personDelete(token)
      .then(person => {
        if (!person) this.clearData();
      })
      .catch(({ response }) => {
        this.context.handleShowNotification(response.data.status);
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
          onSignOut: this.clearData,
          onPersonDelete: this.onPersonDelete
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
