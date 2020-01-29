import React from 'react';
import ConfirmationCmp from './ConfirmationCmp';
import DeleteView from './DeleteView';

const DeleteDialog = props => (
  <ConfirmationCmp>
    {({ isOpen, show, hide, confirm }) => (
      <DeleteView
        isOpen={isOpen}
        show={show}
        hide={hide}
        confirm={confirm}
        {...props}
      />
    )}
  </ConfirmationCmp>
);

export default DeleteDialog;