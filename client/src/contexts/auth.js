import React, { Component, createContext } from 'react';

import { personCreate } from '../services/authService';
import { withRouter } from 'react-router-dom';
import Notifications from '../components/Notifications/Notifications';
import { saveToStorage, getFromStorage } from '../utils/localStorageUtils';
import { PERSON, TOKEN } from '../helpers/localStorageConstans';

const AuthContext = createContext();

class AuthContextProvider extends Component {
  static Consumer = AuthContext.Consumer;
  state = {
    person: getFromStorage(PERSON, null),
    token: getFromStorage(TOKEN, null),
    notifications: []
  };

  onSignUp = (credentials, setSubmitting) => {
    personCreate(credentials)
      .then(({ person, token }) => {
        saveToStorage(TOKEN, token);
        saveToStorage(PERSON, person);

        this.setState({ person, token }, () => this.props.history.replace('/'));
      })
      .catch(({ response }) => {
        this.handleShowNotification(response.data.status);
        setSubmitting(false);
      });
  };

  handleShowNotification = err => {
    const id = Date.now();

    this.setState(
      prevState => ({
        notifications: [
          ...prevState.notifications,
          {
            id,
            content: err,
            status: 'ERROR'
          }
        ]
      }),
      () => {
        this.handleClearNotification(id);
      }
    );
  };

  handleClearNotification = id => {
    setTimeout(() => {
      this.setState({
        notifications: this.state.notifications.filter(note => note.id !== id)
      });
    }, 3000);
  };

  onSignOut = () => () => this.setState({ person: null });

  render() {
    const { person, notifications } = this.state;

    return (
      <AuthContext.Provider
        value={{
          person,
          onSignUp: this.onSignUp,
          onSignOut: this.onSignOut
        }}
      >
        {notifications.length > 0 && (
          <Notifications notifications={notifications} />
        )}

        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default withRouter(AuthContextProvider);
