import React, { Component, createContext } from 'react';
import { userCreate } from '../services/authService';
import { withRouter } from 'react-router-dom';
import Notifications from '../components/Notifications/Notifications';

const AuthContext = createContext();

class AuthContextProvider extends Component {
  static Consumer = AuthContext.Consumer;
  state = {
    isAuthenticated: false,
    user: null,
    notifications: []
  };

  onSignUp = (credentials, setSubmitting) => {
    userCreate(credentials)
      .then(user => {
        this.setState({ isAuthenticated: true, user }, () =>
          this.props.history.push('/')
        );
      })
      .catch(err => {
        const id = Date.now();
        console.log(err.response);
        this.setState(
          prevState => ({
            notifications: [
              ...prevState.notifications,
              {
                id,
                content: err.response.data.status,
                status: 'ERROR'
              }
            ]
          }),
          () => {
            this.handleClearNotification(id);
            setSubmitting(false);
          }
        );
      });
  };

  handleClearNotification = id => {
    setInterval(() => {
      this.setState({
        notifications: this.state.notifications.filter(note => note.id !== id)
      });
    }, 3000);
  };

  onSignOut = () => () => this.setState({ isAuthenticated: false, user: null });

  render() {
    const { isAuthenticated, user, notifications } = this.state;

    return (
      <AuthContext.Provider
        value={{
          isAuthenticated,
          user,
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
