import React from 'react';
import {
  StyledButton,
  ControlArea,
  Dialog,
  Overlay,
  ConfirmContent,
} from '../styles';

const DeleteView = ({ isOpen, show, hide, confirm, children }) => (
  <>
    {children(show)}
    {isOpen && (
      <Overlay>
        <Dialog>
          <ConfirmContent>Delete</ConfirmContent>
          <ConfirmContent>
            Are you sure you want to delete this person?
          </ConfirmContent>
          <ControlArea>
            <StyledButton color="red" onClick={hide}>
              Cancel
            </StyledButton>
            <StyledButton color="green" onClick={confirm}>
              OK
            </StyledButton>
          </ControlArea>
        </Dialog>
      </Overlay>
    )}
  </>
);

export default DeleteView;
