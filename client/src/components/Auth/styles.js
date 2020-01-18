import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

const PageWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const FormTitle = styled.span`
  padding-bottom: 15px;
  font-weight: bold;
  font-size: 22px;
`;

const FormContent = styled.span`
  padding-bottom: 15px;
`;

const StyledForm = styled(Form)`
  margin: auto;
  color: white;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 20px 0;
  background-color: #228b22;
`;

const StyledFormError = styled(StyledForm)`
  background-color: #ffd2d2;
  color: #d8000c;
`;

const StyledRow = styled.div`
  padding-bottom: 15px;
  position: relative;
`;

const StyledField = styled(Field)`
  border-radius: 5px;
  padding: 10px 20px;
  outline: none;
  border: none;
`;

const StyledInlineErrorMessage = styled.span`
  color: rgb(120, 27, 0);
  display: block;
  position: absolute;
  font-size: 14px;
  bottom: 0;
`;

const StyledButton = styled.button`
  width: 150px;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  outline: none;
  color: #228b22;
  background-color: white;
  cursor: pointer;
`;

const StyledButtonError = styled(StyledButton)`
  color: #d8000c;
`;

const LinkArea = styled(Link)`
  margin-top: 10px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ConfirmComponent = styled.div`
  margin: auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 20px 0;
  background-color: ${props => (props.success ? '#45b6fe' : '#ffd2d2')};
  color: ${props => (props.success ? '#f1fbfc' : '#d8000c')};
`;

const ConfirmButton = styled(StyledButton)`
  color: ${props => (props.success ? '#45b6fe' : '#d8000c')};
`;

export {
  PageWrapper,
  FormTitle,
  StyledForm,
  StyledFormError,
  StyledField,
  StyledButton,
  StyledButtonError,
  StyledInlineErrorMessage,
  StyledRow,
  LinkArea,
  ConfirmComponent,
  ConfirmButton,
  FormContent
};
