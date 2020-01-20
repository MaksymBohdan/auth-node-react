import React, { Component } from 'react';
import { AuthContext } from '../../../contexts/auth';
import VerificationFailed from './VerificationViewFailed';
import VerificationSuccess from './VerificationViewSuccess';

class VerificationContainer extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    this.context.onVerify(params.token);
  }

  render() {
    const { isVerified } = this.context;

    return isVerified ? <VerificationSuccess /> : <VerificationFailed />;
  }
}

export default VerificationContainer;
