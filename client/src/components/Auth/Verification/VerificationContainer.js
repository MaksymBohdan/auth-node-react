import React, { Component } from 'react';
import { AuthContext } from '../../../contexts/auth';
import { PageWrapper } from '../styles';
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

    return (
      <PageWrapper>
        {isVerified ? <VerificationSuccess /> : <VerificationFailed />}
      </PageWrapper>
    );
  }
}

export default VerificationContainer;
