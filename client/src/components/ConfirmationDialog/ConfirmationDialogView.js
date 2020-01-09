import React from 'react';
import { StyledButton, ControlArea, Dialog, Overlay } from './styles';

const ConfirmationDialogView = ({
  isOpen,
  show,
  title,
  description,
  hide,
  confirm,
  children
}) => (
  <>
    {children(show)}
    {isOpen && (
      <Overlay>
        <Dialog>
          <h2>{title}</h2>
          <span>{description}</span>
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

export default ConfirmationDialogView;
