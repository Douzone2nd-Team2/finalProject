import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: auto;
  background-color: #f6f6f6;
  border-radius: 15px;
  opacity: 0.9;
  font-family: NanumGothicBold;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 16px;
  margin-top: 24px;
`;

const TitleContainer = styled.div`
  margin-top: 30px;
  margin-left: 10%;
  padding-top: 30px;
  padding-left: 30px;
  font-size: 25px;
  font-weight: bolder;
  color: #222222;
`;

const NotContentContainer = styled.div`
  margin: 20px;
  font-family: NanumGothic;
  display: flex;
  justify-content: space-between;
  background-color: #f6f6f6;
`;

export { Container, TitleContainer, NotContentContainer };
