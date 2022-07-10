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
  font-weight: 600;
  padding-top: 30px;
  border-bottom: 4px solid black;
`;

const BookContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin: 20px;
  font-family: NanumGothic;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 3px black;

  .location {
    font-size: 15px;
  }

  .title {
    font-size: 23px;
  }

  .price_origin {
    color: gray;
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
    width: 300px;
    height: 150px;
  }
  position: relative;
`;

const RightContainer = styled.div`
  right: 600px;
  margin-top: 50px;
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
