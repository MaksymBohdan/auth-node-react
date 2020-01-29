import React from 'react';
import ConfirmationCmp from './ConfirmationCmp';
import UploadView from './UploadView';
import UploadContext from '../../contexts/upload';

const UploadDialog = props => (
  <UploadContext.Consumer>
    {({ handleSelectedFile, file }) => (
      <ConfirmationCmp>
        {({ isOpen, show, hide, confirm, collectData }) => (
          <UploadView
            isOpen={isOpen}
            show={show}
            hide={hide}
            confirm={confirm}
            collectData={collectData}
            handleSelectedFile={handleSelectedFile}
            file={file}
            {...props}
          />
        )}
      </ConfirmationCmp>
    )}
  </UploadContext.Consumer>
);

export default UploadDialog;
