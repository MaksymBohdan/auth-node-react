import React from 'react';
import AuthContext from '../../contexts/auth';
import { MainContainer, ControlPanel, StyledButton } from './styles';
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialogContainer';

const Main = () => (
  <AuthContext.Consumer>
    {({ person, onSignOut, onPersonDelete, token }) => (
      <ConfirmationDialog
        title="Delete"
        description="Are you sure you want to delete this person?"
      >
        {confirm => (
          <MainContainer>
            <img src="#" alt="person img" />
            <p>{person.name}</p>
            <ControlPanel>
              <StyledButton type="button" color="blue">
                Upload Image
              </StyledButton>
              <StyledButton
                type="button"
                color="red"
                onClick={confirm(() => onPersonDelete(token))}
              >
                Delete Person
              </StyledButton>
              <StyledButton type="button" color="grey" onClick={onSignOut}>
                Log Out
              </StyledButton>
            </ControlPanel>
          </MainContainer>
        )}
      </ConfirmationDialog>
    )}
  </AuthContext.Consumer>
);

export default Main;
