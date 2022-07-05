import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 10px;
  background-color: #f6f6f6;
  border-radius: 15px;
  opacity: 0.9;
  font-family: NanumGothicBold;
  overflow: auto;
`;

const TitleContainer = styled.div`
  margin-top: 30px;
  margin-left: 10%;
  padding-top: 30px;
  padding-left: 30px;
  font-size: 25px;
  font-weight: bolder;
`;

const NotContentContainer = styled.div`
  margin: 20px;
  font-family: NanumGothic;
  display: flex;
  justify-content: space-between;
  background-color: #f6f6f6;
`;

export { Container, TitleContainer, NotContentContainer };
