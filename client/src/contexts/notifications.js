import React, { Component, createContext } from 'react';
import Notifications from '../components/Notifications/Notifications';

export const NotificationContext = createContext();

class NotificationsContextProvider extends Component {
  state = {
    notifications: [],
  };

  handleShowNotification = notification => {
    const id = Date.now();

    this.setState(
      prevState => ({
        notifications: [
          ...prevState.notifications,
          {
            id,
            ...notification,
          },
        ],
      }),
      () => {
        this.handleClearNotification(id);
      },
    );
  };

  handleClearNotification = id => {
    const { notifications } = this.state;

    setTimeout(() => {
      this.setState({
        notifications: notifications.filter(note => note.id !== id),
      });
    }, 3000);
  };

  static Consumer = NotificationContext.Consumer;

  render() {
    const { notifications } = this.state;
    const { children } = this.props;

    return (
      <NotificationContext.Provider
        value={{
          handleShowNotification: this.handleShowNotification,
        }}
      >
        {notifications.length > 0 && (
          <Notifications notifications={notifications} />
        )}

        {children}
      </NotificationContext.Provider>
    );
  }
}

export default NotificationsContextProvider;
