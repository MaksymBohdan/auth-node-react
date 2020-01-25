import React, { Component, createContext } from 'react';
import {
  signUp,
  signIn,
  personDelete,
  verifyAccount,
  resendToken,
  passwordForgot,
  passwordReset,
  connectWithFb
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
    isVerified: false,
    isPasswordReset: false
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

  onPasswordForgot = (email, setSubmitting) => {
    passwordForgot(email)
      .then(response => this.context.handleShowNotification(response))
      .catch(({ response }) =>
        this.context.handleShowNotification(response.data)
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  onPasswordReset = (credentials, setSubmitting) => {
    passwordReset(credentials)
      .then(() => this.setState({ isPasswordReset: true }))
      .catch(({ response }) =>
        this.context.handleShowNotification(response.data)
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  onConnectWithFb = data => {
    connectWithFb(data)
      .then(({ person, token }) => {
        saveToStorage(TOKEN, token);
        saveToStorage(PERSON, person);

        this.setState({ person, token });
      })
      .catch(({ response }) => {
        console.log('err');
        this.context.handleShowNotification(response.data);
      });
  };

  render() {
    const { person, isVerified, isPasswordReset } = this.state;

    return (
      <AuthContext.Provider
        value={{
          person,
          isVerified,
          isPasswordReset,
          onSignUp: this.onSignUp,
          onSignIn: this.onSignIn,
          onConnectWithFb: this.onConnectWithFb,
          onSignOut: this.clearAuthData,
          onPersonDelete: this.onPersonDelete,
          onVerify: this.onAccountVerify,
          onTokenResend: this.resendVerificationToken,
          onPasswordForgot: this.onPasswordForgot,
          onPasswordReset: this.onPasswordReset
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
