import React from 'react';
import AuthContext from '../../contexts/auth';
import { MainContainer, ControlPanel, StyledButton } from './styles';
import UploadContext from '../../contexts/upload';
import DeleteDialog from '../ConfirmationDialog/Delete/DeleteDialog';
import UploadDialog from '../ConfirmationDialog/Upload/UploadDialog';
import logo from '../../assets/small.jpg';

const Main = () => (
  <AuthContext.Consumer>
    {({ person: { name, _id: id }, onSignOut, onPersonDelete }) => (
      <UploadContext.Consumer>
        {({ handleFileUpload }) => (
          <MainContainer>
            <img src={logo} width="200" height="200" alt="logo" />
            <p>{name}</p>
            <ControlPanel>
              <UploadDialog>
                {confirm => (
                  <StyledButton
                    type="button"
                    color="blue"
                    onClick={confirm(() => handleFileUpload(id))}
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
        )}
      </UploadContext.Consumer>
    )}
  </AuthContext.Consumer>
);

export default Main;
