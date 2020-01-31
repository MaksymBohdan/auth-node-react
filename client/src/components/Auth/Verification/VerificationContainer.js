import React, { Component } from 'react';
import { AuthContext } from '../../../contexts/auth';
import VerificationFailed from './VerificationViewFailed';
import VerificationSuccess from './VerificationViewSuccess';

class VerificationContainer extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    const { onVerify } = this.context;

    onVerify(params.token);
  }

  static contextType = AuthContext;

  render() {
    const { isVerified } = this.context;

    return isVerified ? <VerificationSuccess /> : <VerificationFailed />;
  }
}

export default VerificationContainer;
