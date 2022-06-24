import styled from 'styled-components';

const Container = styled.div`
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  width: 1075px;
  height: 300px;
  box-shadow: 1px 1px #e2e2e2;
`;

const ImageContainer = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  padding: 10px;
`;

const TitleContainer = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  padding-left: 30px;
  font-size: 15px;
  font-weight: bolder;
`;

export { Container, ImageContainer, TitleContainer };
