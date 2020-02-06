/* eslint-disable no-console */
import React, { createContext, useState } from 'react';
import { uploadFile } from '../services';

const UploadContext = createContext();

const UploadProvider = ({ children }) => {
  const [file, setFile] = useState(null);
  const handleSelectedFile = e => setFile(e.target.files[0]);

  const [imageUrl, setImageUrl] = useState('#');
  const handleFileUpload = args => {
    const [fileToUpload, id] = args;
    const formData = new FormData();

    formData.append('img', fileToUpload, fileToUpload.name);
    formData.append('personId', id);

    uploadFile(formData)
      .then(({ person: { imageUrl: url } }) => setImageUrl(url))
      .catch(err => console.log(err));
  };

  return (
    <UploadContext.Provider
      value={{
        file,
        imageUrl,
        handleSelectedFile,
        handleFileUpload,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export { UploadContext, UploadProvider };
