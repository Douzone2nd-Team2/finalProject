import styled from 'styled-components';

const ItemContainer = styled.div`
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
  }

  .price_origin {
    text-decoration: line-through;
    color: gray;
    font-size: 10px;
  }
  .p_discount {
    margin-left: 0.5rem;
    text-decoration: none;
    color: red;
    font-size: 10px;
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
  }
  position: relative;
`;

const RightContainer = styled.div`
  position: absolute;
  right: 600px;
  margin-top: 25px;
`;

export {
  ItemContainer,
  LeftContainer,
  TitleContainer,
  ImageContainer,
  RightContainer,
};
