import styled from 'styled-components';

export const SbContainer = styled.div`
  background-color: #d2d2d2;
  width: 300px;
  height: 1000px;
  font-size: 20px;
  font-weight: 600;
  min-width: 151px;
  max-width: 230px;
`;

export const SbUl = styled.ul`
  padding: 0%;
`;
export const SbLi = styled.li`
  cursor: pointer;
  list-style: none;
  border: 1px solid #969696;
  border-left: none;
  border-right: none;
  border-bottom: none;
  padding: 10px;
  &:hover {
    background-color: rgb(0, 0, 0, 0.2);
    color: rgb(255, 255, 255, 100);
  }
`;

export const SbChildUl = styled.ul`
  display: none;
  border-top: 1px solid #969696;
  padding: 0px;
`;

export const SbChildLi = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 10px 10px 10px 10px;
  border-top: 1px solid #969696;
  font-size: 17px;
  a {
    text-decoration: none;
    color: black;
  }
  &:hover {
    background-color: rgb(0, 0, 0, 0.2);
    color: rgb(255, 255, 255, 100);
  }
  &:hover > a {
    color: rgb(255, 255, 255, 100);
  }
`;
