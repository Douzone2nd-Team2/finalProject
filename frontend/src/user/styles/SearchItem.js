import styled from 'styled-components';

const ItemContainer = styled.div`
  text-decoration: none;
  padding: 20px;
  margin: 20px;
  font-family: NanumGothic;
  display: flex;
  background-color: white;

  .location {
    font-size: 15px;
  }

  .title {
    font-size: 23px;
    font-weight: 800;
  }

  .price_origin {
    color: #717171;
    font-size: 16px;
    font-weight: 600;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const TitleContainer = styled.div`
  min-width: 200px;
`;

const ImageContainer = styled.div`
  img {
    width: 150px;
    height: 150px;
    min-width: 180px;
  }
`;

const OptionContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  left: 50%;
  min-width: 50px;
  margin-top: 50px;
  font-weight: 500;
`;

const ContentContainer = styled.div`
  margin-right: 5%;
  margin-top: 40px;
`;

const RightContainer = styled.div`
  margin-left: 70px;
`;

export {
  ItemContainer,
  LeftContainer,
  TitleContainer,
  ImageContainer,
  OptionContainer,
  ContentContainer,
  RightContainer,
};
