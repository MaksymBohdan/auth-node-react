import React, { Component } from 'react';
import { PageWrapper } from '../styles';
import { verifyAccount, resendToken } from '../../../services';
import VerificationFailed from './VerificationFailed';
import VerificationSuccess from './VerificationSuccess';

class Verification extends Component {
  state = {
    loading: true,
    isVerified: false
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    verifyAccount({ token: params.token })
      .then(() => this.setState({ isVerified: true, loading: false }))
      .catch(() => this.setState({ isVerified: false, loading: false }));
  }

  showComponent = token => {
    const { isVerified } = this.state;

    return isVerified ? (
      <VerificationSuccess />
    ) : (
      <VerificationFailed resend={this.resendVerificationToken} token={token} />
    );
  };

  resendVerificationToken = () => {
    const {
      match: { params }
    } = this.props;

    resendToken({ token: params.token })
      .then(() => console.log('then'))
      .catch(() => console.log('catch'));
  };

  render() {
    const { loading } = this.state;
    const {
      match: { params }
    } = this.props;

    return (
      <PageWrapper>
        {loading ? (
          <h1>confirming your email...</h1>
        ) : (
          this.showComponent(params.token)
        )}
      </PageWrapper>
    );
  }
}

export default Verification;
