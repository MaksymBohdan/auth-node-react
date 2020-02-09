import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import App from './components/App';
import { NotificationProvider } from './contexts/notifications';
import { AuthProvider } from './contexts/auth';
import { UploadProvider } from './contexts/upload';

ReactDOM.render(
  <BrowserRouter>
    <NotificationProvider>
      <AuthProvider>
        <UploadProvider>
          <Reset />
          <Route component={App} />
        </UploadProvider>
      </AuthProvider>
    </NotificationProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
