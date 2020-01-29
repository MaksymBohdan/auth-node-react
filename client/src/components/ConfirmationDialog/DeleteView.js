import React from 'react';
import { StyledButton, ControlArea, Dialog, Overlay } from './styles';

const DeleteView = ({ isOpen, show, hide, confirm, children }) => (
  <>
    {children(show)}
    {isOpen && (
      <Overlay>
        <Dialog>
          <h2>Delete</h2>
          <span>Are you sure you want to delete this person?</span>
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
