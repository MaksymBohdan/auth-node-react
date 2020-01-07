import React from 'react';
import AuthContext from '../../contexts/auth';
import { MainContainer, ControlPanel, StyledButton } from './styles';

const Main = () => (
  <AuthContext.Consumer>
    {({ person, onSignOut, onPersonDelete, token }) => (
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
            onClick={() => onPersonDelete(token)}
          >
            Delete Person
          </StyledButton>
          <StyledButton type="button" color="grey" onClick={onSignOut}>
            Log Out
          </StyledButton>
        </ControlPanel>
      </MainContainer>
    )}
  </AuthContext.Consumer>
);

export default Main;
