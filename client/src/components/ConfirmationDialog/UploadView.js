import React from 'react';
import {
  StyledButton,
  ControlArea,
  Dialog,
  Overlay,
  ConfirmButton
} from './styles';

const UploadDialogView = ({
  isOpen,
  show,
  hide,
  confirm,
  children,
  handleSelectedFile,
  file
}) => (
  <>
    {children(show)}
    {isOpen && (
      <Overlay>
        <Dialog>
          <h2>Upload</h2>
          <span>Please choose the file for uploading</span>
          <ControlArea>
            <>
              <input type="file" onChange={handleSelectedFile} />
            </>
            <StyledButton color="red" onClick={hide}>
              Cancel
            </StyledButton>
            <ConfirmButton disabled={!file} color="green" onClick={confirm}>
              OK
            </ConfirmButton>
          </ControlArea>
        </Dialog>
      </Overlay>
    )}
  </>
);

export default UploadDialogView;
