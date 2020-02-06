import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { UploadContext } from '../../contexts/upload';
import DeleteDialog from '../ConfirmationDialog/DeleteDialog';
import UploadDialog from '../ConfirmationDialog/UploadDialog';
import { MainContainer, ControlPanel, StyledButton } from './styles';
import logo from '../../assets/small.jpg';

const Main = () => {
  const { person, onSignOut, onPersonDelete } = useContext(AuthContext);
  const { handleFileUpload } = useContext(UploadContext);

  return (
    <MainContainer>
      <img src={logo} width="200" height="200" alt="logo" />
      <p>{person.name}</p>
      <ControlPanel>
        <UploadDialog>
          {handleConfirm => (
            <StyledButton
              type="button"
              color="blue"
              onClick={handleConfirm(handleFileUpload)}
            >
              Upload Image
            </StyledButton>
          )}
        </UploadDialog>
        <DeleteDialog>
          {handleConfirm => (
            <StyledButton
              type="button"
              color="red"
              onClick={handleConfirm(onPersonDelete)}
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
  );
};

export default Main;
