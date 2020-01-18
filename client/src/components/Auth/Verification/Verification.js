import React, { Component } from 'react';
import { PageWrapper } from '../styles';
import { verifyAccount, resendToken } from '../../../services';
import VerificationFailed from './VerificationFailed';
import VerificationSuccess from './VerificationSuccess';
import { NotificationContext } from '../../../contexts/notifications';

class Verification extends Component {
  state = {
    loading: true,
    isVerified: false
  };

  static contextType = NotificationContext;

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    verifyAccount({ token: params.token })
      .then(() => this.setState({ isVerified: true, loading: false }))
      .catch(() => this.setState({ isVerified: false, loading: false }));
  }

  showComponent = () => {
    const { isVerified } = this.state;

    return isVerified ? (
      <VerificationSuccess />
    ) : (
      <VerificationFailed resend={this.resendVerificationToken} />
    );
  };

  resendVerificationToken = (email, setSubmitting) => {
    resendToken(email)
      .then(response => this.context.handleShowNotification(response))
      .catch(({ response }) =>
        this.context.handleShowNotification(response.data)
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  render() {
    const { loading } = this.state;

    return (
      <PageWrapper>
        {loading ? <h1>confirming your email...</h1> : this.showComponent()}
      </PageWrapper>
    );
  }
}

export default Verification;
