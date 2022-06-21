import styled from 'styled-components';

const BookContainer = styled.div`
  margin: 30px;
  .thumbnail {
    img {
      width: 300px;
      height: 200px;
      margin: auto;
      margin-bottom: 30px;
    }
  }
  .contents {
    background-color: white;
    width: 300px;
    height: 210px;
    margin: auto;
    h2 {
      margin: 0;
    }
    .discount {
      margin-left: 10rem;
      border: 2px solid orange;
      border-radius: 50px;
      background-color: orange;
      color: white;
      font-size: 13px;
    }
    .price_origin {
      text-decoration: line-through;
      color: gray;
      font-size: 20px;
    }
    .p_discount {
      margin-left: 0.5rem;
      text-decoration: none;
      color: red;
      font-size: 20px;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

export default BookContainer;
