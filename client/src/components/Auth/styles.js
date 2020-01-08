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
  color: white;
  font-weight: bold;
  font-size: 22px;
`;

const StyledForm = styled(Form)`
  margin: auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 20px 0;
  background-color: #228b22;
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

const LinkArea = styled(Link)`
  margin-top: 10px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export {
  PageWrapper,
  FormTitle,
  StyledForm,
  StyledField,
  StyledButton,
  StyledInlineErrorMessage,
  StyledRow,
  LinkArea
};
