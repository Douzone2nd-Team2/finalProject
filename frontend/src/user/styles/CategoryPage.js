import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: aliceblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
`;

const ImageContainer = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 30px;
  padding: 10px;
`;

const TitleContainer = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  padding-left: 30px;
  font-size: 20px;
  font-weight: bolder;
`;

export { Container, ImageContainer, TitleContainer };
