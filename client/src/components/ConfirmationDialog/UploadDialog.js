import React, { useContext } from 'react';
import ConfirmationCmp from './ConfirmationCmp';
import { UploadContext } from '../../contexts/upload';
import { AuthContext } from '../../contexts/auth';
import {
  StyledButton,
  ControlArea,
  Dialog,
  Overlay,
  ConfirmButton,
  ConfirmContent,
} from './styles';

const UploadDialog = ({ children }) => {
  const {
    person: { _id: id },
  } = useContext(AuthContext);
  const { handleSelectedFile, file } = useContext(UploadContext);

  return (
    <ConfirmationCmp>
      {({ isOpen, show, hide, confirm }) => (
        <>
          {children(show)}
          {isOpen && (
            <Overlay>
              <Dialog>
                <ConfirmContent>Upload</ConfirmContent>
                <ConfirmContent>
                  Please choose the file for uploading
                </ConfirmContent>
                <ControlArea>
                  <input type="file" onChange={handleSelectedFile} />
                  <StyledButton color="red" onClick={hide}>
                    Cancel
                  </StyledButton>
                  <ConfirmButton
                    disabled={!file}
                    color="green"
                    onClick={() => confirm(file, id)}
                  >
                    OK
                  </ConfirmButton>
                </ControlArea>
              </Dialog>
            </Overlay>
          )}
        </>
      )}
    </ConfirmationCmp>
  );
};

export default UploadDialog;
