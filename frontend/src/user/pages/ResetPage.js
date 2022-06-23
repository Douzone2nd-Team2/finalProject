import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import Header from '../outlets/Header';
import Footer from '../outlets/Footer';

import {
  Container,
  TitleContainer,
  ImgContainer,
  ContentContainer,
  InputContainer,
  CenterSort,
  ButtonContainer,
} from '../styles/ResetPage';

const ResetPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <TitleContainer>비밀번호 변경</TitleContainer>
        <hr />
        <ImgContainer>
          <img src={process.env.PUBLIC_URL + '/key.png'} alt="key" />
        </ImgContainer>
        <ContentContainer>
          비밀번호를 변경하여 네트워크를 안전하게 만드세요
        </ContentContainer>
        <form>
          <CenterSort>
            <label htmlFor="ppwd">현재 비밀번호</label>
            <InputContainer>
              <input type="text" name="ppwd" id="ppwd" />
            </InputContainer>
          </CenterSort>
          <CenterSort>
            <label htmlFor="npwd">수정 비밀번호</label>
            <InputContainer>
              <input type="text" name="npwd" id="npwd" />
            </InputContainer>
          </CenterSort>
          <CenterSort>
            <label htmlFor="cpwd">비밀번호 확인</label>
            <InputContainer>
              <input type="text" name="=cpwd" id="cpwd" />
            </InputContainer>
          </CenterSort>
          <ButtonContainer>
            <Button
              variant="secondary"
              onClick={() => {
                navigate(-1);
              }}
            >
              이전
            </Button>
            <Button variant="primary">변경</Button>
          </ButtonContainer>
        </form>
      </Container>
    </>
  );
};

export default ResetPage;
