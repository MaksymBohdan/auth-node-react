import React, { Component, createContext } from 'react';
import {
  signUp,
  signIn,
  personDelete,
  verifyAccount,
  resendToken
} from '../services';
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
    token: getFromStorage(TOKEN, null),
    isVerified: false
  };

  static Consumer = AuthContext.Consumer;

  static contextType = NotificationContext;

  onSignIn = (credentials, setSubmitting) => {
    signIn(credentials)
      .then(({ person, token }) => {
        saveToStorage(TOKEN, token);
        saveToStorage(PERSON, person);

        this.setState({ person, token });
      })
      .catch(({ response }) => {
        this.context.handleShowNotification(response.data);
        setSubmitting(false);
      });
  };

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

  onPersonDelete = () => {
    personDelete(this.state.token)
      .then(person => {
        if (!person) this.clearAuthData();
      })
      .catch(({ response }) => {
        this.context.handleShowNotification(response.data);
      });
  };

  onAccountVerify = token => {
    verifyAccount({ token })
      .then(() => this.setState({ isVerified: true }))
      .catch(() => this.setState({ isVerified: false }));
  };

  resendVerificationToken = (email, setSubmitting) => {
    resendToken(email)
      .then(response => this.context.handleShowNotification(response))
      .catch(({ response }) =>
        this.context.handleShowNotification(response.data)
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  render() {
    const { person, isVerified } = this.state;

    return (
      <AuthContext.Provider
        value={{
          person,
          isVerified,
          onSignUp: this.onSignUp,
          onSignIn: this.onSignIn,
          onSignOut: this.clearAuthData,
          onPersonDelete: this.onPersonDelete,
          onVerify: this.onAccountVerify,
          onTokenResend: this.resendVerificationToken
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
