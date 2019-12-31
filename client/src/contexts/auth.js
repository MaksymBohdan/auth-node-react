import React, { Component, createContext } from 'react';

const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  static Consumer = AuthContext.Consumer;
  state = {
    isAuthenticated: false,
    user: null
  };

  onSignIn = user => {
    console.log('aaaauser', user);
    this.setState({ isAuthenticated: true, user });
  };

  onSignOut = () => () => this.setState({ isAuthenticated: false, user: null });

  render() {
    const { isAuthenticated, user } = this.state;

    return (
      <AuthContext.Provider
        value={{
          isAuthenticated,
          user,
          onSignIn: this.onSignIn,
          onSignOut: this.onSignOut
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
