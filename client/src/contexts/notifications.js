import React, { createContext, useState, useEffect } from 'react';
import Notifications from '../components/Notifications/Notifications';

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotification] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  const handleShowNotification = notification => {
    const id = Date.now();
    const newNotification = { id, ...notification };

    setCurrentId(id);
    setNotification(prevNtf => [...prevNtf, newNotification]);
  };

  useEffect(() => {
    setTimeout(() => {
      setNotification(prevNtf => prevNtf.filter(note => note.id !== currentId));
    }, 3000);
  }, [notifications, currentId]);

  return (
    <NotificationContext.Provider
      value={{
        handleShowNotification,
      }}
    >
      {notifications.length > 0 && (
        <Notifications notifications={notifications} />
      )}

      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, NotificationContext };
