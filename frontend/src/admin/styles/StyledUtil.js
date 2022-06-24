import styled from "styled-components";

export const SbContainer = styled.div`
  background-color: #d2d2d2;
  width: 15%;
  height: 100vh;
  font-size: 20px;
`;

export const SbTile = styled.h3`
  margin-left: 10px;
  margin: 0%;
  padding-left: 10px;
`;
export const SbUl = styled.ul`
  padding: 0%;
`;
export const SbLi = styled.li`
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

export const HContainer = styled.div`
  border-bottom: 10px solid #3d73ff;
`;

export const HImg = styled.img`
  width: 90px;
  height: 70px;
`;

export const HButtom = styled.button`
  background-color: #3d73ff;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 8px;
  float: right;
  margin: 20px 10px 0px 0px;
`;
