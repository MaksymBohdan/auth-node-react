import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';
import VerificationFailed from './VerificationViewFailed';
import VerificationSuccess from './VerificationViewSuccess';

const VerificationContainer = ({ match: { params } }) => {
  const { isVerified, onAccountVerify } = useContext(AuthContext);

  useEffect(() => {
    onAccountVerify(params.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isVerified ? <VerificationSuccess /> : <VerificationFailed />;
};

export default VerificationContainer;
