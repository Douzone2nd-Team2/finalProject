import styled from 'styled-components';

const BookContainer = styled.div`
  margin: 30px;
  font-family: NanumGothic;
  .thumbnail {
    img {
      width: 200px;
      height: 150px;
      margin: auto;
      margin-bottom: 20px;
    }
  }
  .contents {
    padding: 20px;
    background-color: #dcdcdc;
    opacity: 0.8;
    width: 200px;
    height: 200px;
    margin: auto;

    .location {
      font-size: 15px;
    }

    .title {
      font-size: 23px;
    }

    .type {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
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
  }
  & + & {
    margin-top: 3rem;
  }
`;

export default BookContainer;
