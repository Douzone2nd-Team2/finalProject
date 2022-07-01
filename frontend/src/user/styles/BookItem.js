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
    padding: 15px;
    background-color: #dcdcdc;
    opacity: 0.8;
    width: 200px;
    height: 200px;
    margin: auto;

    .resouceName {
      font-size: 20px;
      font-weight: 900;
    }

    .startTime {
      font-size: 15px;
    }

    .endTime {
      font-size: 15px;
    }

    .reservName {
      margin-top: -10px;
      color: gray;
      font-size: 13px;
    }
  }
`;

export default BookContainer;
