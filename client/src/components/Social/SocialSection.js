import React from 'react';
import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';
import { SocialSection } from './styles';

const SocialSectionCmp = () => {
  return (
    <SocialSection>
      <FacebookButton />
      <GoogleButton />
    </SocialSection>
  );
};

export default SocialSectionCmp;
