import React, { createContext, useState, useContext } from 'react';
import * as api from '../services';
import {
  saveToStorage,
  getFromStorage,
  clearStorage,
} from '../utils/localStorageUtils';
import { PERSON, TOKEN } from '../helpers/localStorageConstans';
import { NotificationContext } from './notifications';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { handleShowNotification } = useContext(NotificationContext);

  /*
   ** BASIC AUTHORIZATION
   */
  const [currentPerson, setCurrentPerson] = useState(
    getFromStorage(PERSON, null),
  );

  const [currentToken, setCurrentToken] = useState(getFromStorage(TOKEN, null));

  const setUpCurrentUser = (personToSet, tokenToSet) => {
    saveToStorage(TOKEN, tokenToSet);
    saveToStorage(PERSON, personToSet);

    setCurrentPerson(personToSet);
    setCurrentToken(tokenToSet);
  };

  const onSignIn = (credentials, setSubmitting) => {
    api
      .signIn(credentials)
      .then(({ person, token }) => setUpCurrentUser(person, token))
      .catch(({ response }) => {
        handleShowNotification(response.data);
        setSubmitting(false);
      });
  };

  const onSignUp = (credentials, setSubmitting) => {
    api
      .signUp(credentials)
      .then(response => handleShowNotification(response))
      .catch(({ response }) => handleShowNotification(response.data))
      .finally(() => setSubmitting(false));
  };

  const onSignOut = () => {
    clearStorage();
    setCurrentPerson(null);
    setCurrentToken(null);
  };

  const onPersonDelete = () => {
    api
      .personDelete(currentToken)
      .then(({ person }) => {
        if (!person) onSignOut();
      })
      .catch(({ response }) => {
        handleShowNotification(response.data);
      });
  };

  /*
   ** ACCOUNT VERIFICATION
   */
  const [isVerified, setIsVerified] = useState(false);

  const onAccountVerify = token => {
    api
      .verifyAccount({ token })
      .then(() => setIsVerified(true))
      .catch(() => setIsVerified(false));
  };

  const onTokenResend = (email, setSubmitting) => {
    api
      .resendToken(email)
      .then(response => handleShowNotification(response))
      .catch(({ response }) => handleShowNotification(response.data))
      .finally(() => {
        setSubmitting(false);
      });
  };

  /*
   ** FORGOT PASSWORD
   */
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const onPasswordForgot = (email, setSubmitting) => {
    api
      .passwordForgot(email)
      .then(response => handleShowNotification(response))
      .catch(({ response }) => handleShowNotification(response.data))
      .finally(() => {
        setSubmitting(false);
      });
  };

  const onPasswordReset = (credentials, setSubmitting) => {
    api
      .passwordReset(credentials)
      .then(() => {
        setSubmitting(false);
        setIsPasswordReset(true);
      })
      .catch(({ response }) => {
        setSubmitting(false);
        handleShowNotification(response.data);
      });
  };

  /*
   ** SOCIAL AUTHORIZATION
   */
  const onConnectWithFb = data => {
    const { accessToken, userID } = data;

    api
      .connectWithFb({ accessToken, userID })
      .then(({ person, token }) => setUpCurrentUser(person, token))
      .catch(({ response }) => {
        handleShowNotification(response.data);
      });
  };

  const onConnectWithGoogle = data => {
    const { tokenId } = data;

    api
      .connectWithGoogle({ tokenId })
      .then(({ person, token }) => setUpCurrentUser(person, token))
      .catch(({ response }) => handleShowNotification(response.data));
  };

  return (
    <AuthContext.Provider
      value={{
        person: currentPerson,
        onAccountVerify,
        isVerified,
        isPasswordReset,
        onSignUp,
        onSignIn,
        onConnectWithFb,
        onConnectWithGoogle,
        onSignOut,
        onPersonDelete,
        onTokenResend,
        onPasswordForgot,
        onPasswordReset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
