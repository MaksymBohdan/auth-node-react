import React, { Component, createContext } from 'react';
import { userCreate } from '../services/authService';
import { withRouter } from 'react-router-dom';

const AuthContext = createContext();

class AuthContextProvider extends Component {
  static Consumer = AuthContext.Consumer;
  state = {
    isAuthenticated: false,
    user: null
  };

  onSignUp = credentials => {
    userCreate(credentials)
      .then(user => {
        this.setState({ isAuthenticated: true, user }, () =>
          this.props.history.push('/')
        );
      })
      .catch(err => console.error(err));
  };

  onSignOut = () => () => this.setState({ isAuthenticated: false, user: null });

  render() {
    const { isAuthenticated, user } = this.state;

    return (
      <AuthContext.Provider
        value={{
          isAuthenticated,
          user,
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
