import styled from 'styled-components';
import { StyledButton } from '../Auth/styles';

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
`;

const StyledButtonFb = styled(StyledButton)`
  background-color: #3b5998;
  color: white;
  margin-top: 15px;
`;

const StyledButtonG = styled(StyledButton)`
  background-color: #d84b37;
  color: white;
  margin-top: 15px;
`;

export { SocialSection, StyledButtonFb, StyledButtonG };
