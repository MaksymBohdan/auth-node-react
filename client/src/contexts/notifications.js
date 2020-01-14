import React, { Component, createContext } from 'react';
import Notifications from '../components/Notifications/Notifications';

export const NotificationContext = createContext();

class NotificationsContextProvider extends Component {
  state = {
    notifications: []
  };

  static Consumer = NotificationContext.Consumer;

  handleShowNotification = notification => {
    const id = Date.now();

    this.setState(
      prevState => ({
        notifications: [
          ...prevState.notifications,
          {
            id,
            ...notification
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

  render() {
    const { notifications } = this.state;

    return (
      <NotificationContext.Provider
        value={{
          handleShowNotification: this.handleShowNotification
        }}
      >
        {notifications.length > 0 && (
          <Notifications notifications={notifications} />
        )}

        {this.props.children}
      </NotificationContext.Provider>
    );
  }
}

export default NotificationsContextProvider;
