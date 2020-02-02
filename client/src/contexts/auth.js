import React, { Component, createContext } from 'react';
import * as api from '../services';
import {
  saveToStorage,
  getFromStorage,
  clearStorage,
} from '../utils/localStorageUtils';
import { PERSON, TOKEN } from '../helpers/localStorageConstans';
import { NotificationContext } from './notifications';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    person: getFromStorage(PERSON, null),
    token: getFromStorage(TOKEN, null),
    isVerified: false,
    isPasswordReset: false,
  };

  onSignIn = (credentials, setSubmitting) => {
    const { handleShowNotification } = this.context;

    api
      .signIn(credentials)
      .then(({ person, token }) => {
        saveToStorage(TOKEN, token);
        saveToStorage(PERSON, person);

        this.setState({ person, token });
      })
      .catch(({ response }) => {
        handleShowNotification(response.data);
        setSubmitting(false);
      });
  };

  onSignUp = (credentials, setSubmitting) => {
    const { handleShowNotification } = this.context;

    api
      .signUp(credentials)
      .then(response => handleShowNotification(response))
      .catch(({ response }) => handleShowNotification(response.data))
      .finally(() => setSubmitting(false));
  };

  clearAuthData = () => {
    clearStorage();
    this.setState({ person: null, token: null });
  };

  onPersonDelete = () => {
    const { token } = this.state;
    const { handleShowNotification } = this.context;

    api
      .personDelete(token)
      .then(({ person }) => {
        if (!person) this.clearAuthData();
      })
      .catch(({ response }) => {
        handleShowNotification(response.data);
      });
  };

  onAccountVerify = token => {
    api
      .verifyAccount({ token })
      .then(() => this.setState({ isVerified: true }))
      .catch(() => this.setState({ isVerified: false }));
  };

  resendVerificationToken = (email, setSubmitting) => {
    const { handleShowNotification } = this.context;

    api
      .resendToken(email)
      .then(response => handleShowNotification(response))
      .catch(({ response }) => handleShowNotification(response.data))
      .finally(() => {
        setSubmitting(false);
      });
  };

  onPasswordForgot = (email, setSubmitting) => {
    const { handleShowNotification } = this.context;

    api
      .passwordForgot(email)
      .then(response => handleShowNotification(response))
      .catch(({ response }) => handleShowNotification(response.data))
      .finally(() => {
        setSubmitting(false);
      });
  };

  onPasswordReset = (credentials, setSubmitting) => {
    const { handleShowNotification } = this.context;

    api
      .passwordReset(credentials)
      .then(() => this.setState({ isPasswordReset: true }))
      .catch(({ response }) => handleShowNotification(response.data))
      .finally(() => {
        setSubmitting(false);
      });
  };

  onConnectWithFb = data => {
    const { accessToken, userID } = data;
    const { handleShowNotification } = this.context;

    api
      .connectWithFb({ accessToken, userID })
      .then(({ person, token }) => {
        saveToStorage(TOKEN, token);
        saveToStorage(PERSON, person);

        this.setState({ person, token });
      })
      .catch(({ response }) => {
        handleShowNotification(response.data);
      });
  };

  onConnectWithGoogle = data => {
    const { tokenId } = data;
    const { handleShowNotification } = this.context;

    api
      .connectWithGoogle({ tokenId })
      .then(({ person, token }) => {
        saveToStorage(TOKEN, token);
        saveToStorage(PERSON, person);

        this.setState({ person, token });
      })
      .catch(({ response }) => handleShowNotification(response.data));
  };

  static contextType = NotificationContext;

  static Consumer = AuthContext.Consumer;

  render() {
    const { person, isVerified, isPasswordReset } = this.state;
    const { children } = this.props;

    return (
      <AuthContext.Provider
        value={{
          person,
          isVerified,
          isPasswordReset,
          onSignUp: this.onSignUp,
          onSignIn: this.onSignIn,
          onConnectWithFb: this.onConnectWithFb,
          onConnectWithGoogle: this.onConnectWithGoogle,
          onSignOut: this.clearAuthData,
          onPersonDelete: this.onPersonDelete,
          onVerify: this.onAccountVerify,
          onTokenResend: this.resendVerificationToken,
          onPasswordForgot: this.onPasswordForgot,
          onPasswordReset: this.onPasswordReset,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
