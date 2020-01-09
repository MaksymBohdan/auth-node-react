import React, { Component } from 'react';
import ConfirmationDialogView from './ConfirmationDialogView';

class ConfirmationDialog extends Component {
  state = {
    isOpen: false,
    callback: null
  };

  hide = () => this.setState({ isOpen: false });

  show = callback => event => {
    // to reuse behavior with other components
    event.preventDefault();

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
    return (
      <ConfirmationDialogView
        isOpen={isOpen}
        show={this.show}
        hide={this.hide}
        confirm={this.confirm}
        {...this.props}
      />
    );
  }
}

export default ConfirmationDialog;
