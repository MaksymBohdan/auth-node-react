import React from 'react';
import AuthContext from '../../contexts/auth';
import { MainContainer, ControlPanel, StyledButton } from './styles';

const Main = () => (
  <AuthContext.Consumer>
    {({ person, onSignOut }) =>
      person ? (
        <MainContainer>
          <img src="#" alt="person img" />
          <p>{person.name}</p>
          <ControlPanel>
            <StyledButton type="button" color="blue">
              Upload Image
            </StyledButton>
            <StyledButton type="button" color="red">
              Delete User
            </StyledButton>
            <StyledButton type="button" color="grey" onClick={onSignOut}>
              Log Out
            </StyledButton>
          </ControlPanel>
        </MainContainer>
      ) : (
        <div>logged out</div>
      )
    }
  </AuthContext.Consumer>
);

export default Main;
