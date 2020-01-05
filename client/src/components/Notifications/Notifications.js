import React from 'react';
import { Container, Note } from './styles';

const Notifications = ({ notifications = [] }) => (
  <Container>
    {notifications.map(({ id, status, content }) => (
      <Note key={id}>
        {status}: {content}!
      </Note>
    ))}
  </Container>
);

export default Notifications;
