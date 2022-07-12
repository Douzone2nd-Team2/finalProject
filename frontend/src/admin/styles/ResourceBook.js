import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px 72px;
`;

const HeadContainer = styled.div`
  font-size: 30px;
  padding-bottom: 12px;
  font-weight: 600;
  padding-top: 30px;
  border-bottom: 4px solid black;
`;

const BookContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const TableContainer = styled.div`
  width: fit-content;
  height: 100%;
  padding: 30px 24px;
`;

const SelectContainer = styled.div`
  select {
    float: right;
  }
  select:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
`;

const SelectBoxDiv = styled.div`
  position: relative;
  bottom: 0%;
`;

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
    font-size: 23px;
    font-weight: 800;
    color: #222222;
    padding-bottom: 4px;
  }

  .price_origin {
    color: #717171;
    font-size: 12px;
    margin-right: 30px;
  }

  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const TitleContainer = styled.div`
  min-width: 250px;
  font-weight: 600;
`;

const ImageContainer = styled.div`
  img {
    width: 320px;
    height: 200px;
  }
  position: relative;
`;

const RightContainer = styled.div`
  color: #434343;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 60px;
`;

export {
  Container,
  HeadContainer,
  TableContainer,
  BookContainer,
  SelectContainer,
  SelectBoxDiv,
  ItemContainer,
  LeftContainer,
  TitleContainer,
  ImageContainer,
  RightContainer,
};
