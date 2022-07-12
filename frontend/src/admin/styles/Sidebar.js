import styled from 'styled-components';

export const SbContainer = styled.div`
  background-color: #e2e2e2;
  width: 300px;
  height: 1000px;
  font-size: 20px;
  font-weight: 600;
  min-width: 151px;
  max-width: 230px;
  color: #222222;
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
  padding: 14px 0px 14px 24px;
  display: flex;
  align-items: center;
  color: #222222;
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
  padding: 14px 0px 14px 32px;
  border-bottom: 1px solid #969696;
  font-size: 17px;
  margin: 0px;
  a {
    text-decoration: none;
    color: black;
    margin: 0px;
  }
  &:hover {
    background-color: rgb(0, 0, 0, 0.2);
    color: rgb(255, 255, 255, 100);
  }
  &:hover > a {
    color: rgb(255, 255, 255, 100);
  }
`;
