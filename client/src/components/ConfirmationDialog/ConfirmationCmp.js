import { Component } from 'react';

class UploadDialogContainer extends Component {
  state = {
    isOpen: false,
    callback: null
  };

  hide = () => this.setState({ isOpen: false });

  show = callback => event => {
    const mockedEvent = {
      ...event,
      target: { ...event.target, value: event.target.value }
    };

    this.setState({ isOpen: true, callback: () => callback(mockedEvent) });
  };

  confirm = () => {
    this.state.callback();
    this.hide();
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    return children({
      isOpen: isOpen,
      show: this.show,
      hide: this.hide,
      confirm: this.confirm
    });
  }
}

export default UploadDialogContainer;
