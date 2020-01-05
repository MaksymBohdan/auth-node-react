import styled from 'styled-components';

const Container = styled.ul`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
  padding: 0;
  z-index: 10;
  width: 300px;
`;

const Note = styled.li`
  color: #d8000c;
  background-color: #ffd2d2;
  padding: 20px 10px;
  margin: 10px;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
`;

export { Container, Note };
