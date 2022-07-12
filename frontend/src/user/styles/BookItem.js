import styled from 'styled-components';

const BookContainer = styled.div`
  margin: 30px;
  font-family: NanumGothic;
  cursor: pointer;
  .thumbnail {
    img {
      width: 200px;
      height: 150px;
      margin: auto;
      margin-bottom: 20px;
    }
  }
  .contents {
    padding: 15px;
    background-color: #d6d6d6;
    opacity: 0.8;
    width: 200px;
    height: 220px;
    margin: auto;

    .resouceName {
      font-size: 20px;
      font-weight: 900;
    }

    .startTime {
      font-size: 15px;
      font-weight: 500;
    }

    .endTime {
      font-size: 15px;
      font-weight: 500;
    }

    .reservName {
      color: #222222;
      font-weight: 600;
      font-size: 13px;
    }
  }
`;

export default BookContainer;
