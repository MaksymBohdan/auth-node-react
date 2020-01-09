import styled from 'styled-components';

const Dialog = styled.div`
  width: 500px;
  padding: 0 0 20px 0;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ControlArea = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  width: 250px;
`;

const StyledButton = styled.button`
  width: 100px;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  outline: none;
  color: white;
  background-color: ${props => props.color};
  cursor: pointer;
`;

export { StyledButton, ControlArea, Dialog, Overlay };
