import styled from 'styled-components';

const ItemContainer = styled.div`
  text-decoration: none;
  padding: 20px;
  margin: 20px;
  font-family: NanumGothic;
  display: flex;
  background-color: white;

  .location {
    font-size: 16px;
    color: #434343;
  }

  .title {
    font-size: 22px;
    font-weight: 800;
    color: #222222;
    padding-bottom: 4px;
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
  padding: 12px 0px 12px 40px;
`;

const TitleContainer = styled.div`
  min-width: 270px;
`;

const ImageContainer = styled.div`
  img {
    width: 240px;
    height: 180px;
    min-width: 180px;
  }
`;

const OptionContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  left: 50%;
  min-width: 50px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  color: #434343;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 40px;
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
