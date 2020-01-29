import React from 'react';
import AuthContext from '../../contexts/auth';
import UploadContext from '../../contexts/upload';
import { MainContainer, ControlPanel, StyledButton } from './styles';
import DeleteDialog from '../ConfirmationDialog/DeleteDialog';
import UploadDialog from '../ConfirmationDialog/UploadDialog';
import logo from '../../assets/small.jpg';

const Main = () => (
  <AuthContext.Consumer>
    {({ person, onSignOut, onPersonDelete }) => (
      <UploadContext.Consumer>
        {({ handleFileUpload, imageUrl }) =>
          console.log(imageUrl) || (
            <MainContainer>
              <img src={logo} width="200" height="200" alt="logo" />
              <p>{person.name}</p>
              <ControlPanel>
                <UploadDialog>
                  {confirm => (
                    <StyledButton
                      type="button"
                      color="blue"
                      onClick={confirm(() => handleFileUpload(person._id))}
                    >
                      Upload Image
                    </StyledButton>
                  )}
                </UploadDialog>
                <DeleteDialog>
                  {confirm => (
                    <StyledButton
                      type="button"
                      color="red"
                      onClick={confirm(() => onPersonDelete())}
                    >
                      Delete Person
                    </StyledButton>
                  )}
                </DeleteDialog>
                <StyledButton type="button" color="grey" onClick={onSignOut}>
                  Log Out
                </StyledButton>
              </ControlPanel>
            </MainContainer>
          )
        }
      </UploadContext.Consumer>
    )}
  </AuthContext.Consumer>
);

export default Main;
