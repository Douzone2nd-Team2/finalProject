import styled from 'styled-components';

const BookContainer = styled.div`
  padding: 12px;
  margin: 42px 18px;
  font-family: NanumGothic;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
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
    background-color: #e2e2e2;
    opacity: 0.8;
    width: 200px;
    height: 220px;
    margin: auto;

    .resouceName {
      font-size: 20px;
      font-weight: 800;
      color: #222222;
    }

    .startTime {
      padding-top: 18px;
    }

    .startTime,
    .endTime {
      font-size: 13px;
      font-weight: 600;
      color: #434343;
    }

    .reservName {
      color: #222222;
      font-weight: 600;
      font-size: 16px;
    }
  }
`;

export default BookContainer;
