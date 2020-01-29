import React, { Component, createContext } from 'react';
import { uploadFile } from '../services';

export const UploadContext = createContext();

class UploadContextProvider extends Component {
  state = {
    file: null,
    imageUrl: '#'
  };

  static Consumer = UploadContext.Consumer;

  handleSelectedFile = e => {
    this.setState({
      file: e.target.files[0]
    });
  };

  handleFileUpload = id => {
    const { file } = this.state;
    const formData = new FormData();

    formData.append('img', file, file.name);
    formData.append('personId', id);

    uploadFile(formData)
      .then(({ person: { imageUrl } }) =>
        this.setState({ imageUrl }, () => console.log(this.state.imageUrl))
      )
      .catch(err => console.log(err));
  };

  render() {
    const { file, imageUrl } = this.state;
    return (
      <UploadContext.Provider
        value={{
          file,
          imageUrl,
          handleFileUpload: this.handleFileUpload,
          handleSelectedFile: this.handleSelectedFile
        }}
      >
        {this.props.children}
      </UploadContext.Provider>
    );
  }
}

export default UploadContextProvider;
