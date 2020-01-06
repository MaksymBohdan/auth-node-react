import styled from 'styled-components';

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
  border: 1px solid black;
  border-radius: 10px;
`;

const ControlPanel = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  width: 150px;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  outline: none;
  color: white;
  background-color: ${props => props.color};
  cursor: pointer;
`;

export { MainContainer, ControlPanel, StyledButton };
