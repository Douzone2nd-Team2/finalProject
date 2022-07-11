import styled from 'styled-components';

const ItemContainer = styled.div`
  text-decoration: none;
  padding: 20px;
  margin: 20px;
  font-family: NanumGothic;
  display: flex;
  justify-content: space-between;
  background-color: white;

  .location {
    font-size: 15px;
  }

  .title {
    font-size: 23px;
    font-weight: 800;
  }

  .price_origin {
    color: gray;
    font-size: 12px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const TitleContainer = styled.div`
  min-width: 250px;
`;

const ImageContainer = styled.div`
  img {
    margin-left: 30px;
    width: 150px;
    height: 150px;
    min-width: 180px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  left: 50%;
  min-width: 50px;
  margin-top: 50px;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  margin-right: 5%;
  margin-top: 40px;
`;

export {
  ItemContainer,
  LeftContainer,
  TitleContainer,
  ImageContainer,
  RightContainer,
  ButtonContainer,
};
