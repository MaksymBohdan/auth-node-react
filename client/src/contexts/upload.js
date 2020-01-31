import React, { Component, createContext } from 'react';
import { uploadFile } from '../services';

export const UploadContext = createContext();

class UploadContextProvider extends Component {
  state = {
    file: null,
    imageUrl: '#',
  };

  handleSelectedFile = e => {
    this.setState({
      file: e.target.files[0],
    });
  };

  handleFileUpload = id => {
    const { file } = this.state;
    const formData = new FormData();

    formData.append('img', file, file.name);
    formData.append('personId', id);

    uploadFile(formData)
      .then(({ person: { imageUrl } }) => this.setState({ imageUrl }))
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  static Consumer = UploadContext.Consumer;

  render() {
    const { file, imageUrl } = this.state;
    const { children } = this.props;

    return (
      <UploadContext.Provider
        value={{
          file,
          imageUrl,
          handleFileUpload: this.handleFileUpload,
          handleSelectedFile: this.handleSelectedFile,
        }}
      >
        {children}
      </UploadContext.Provider>
    );
  }
}

export default UploadContextProvider;
