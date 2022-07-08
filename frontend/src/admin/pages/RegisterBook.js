import {
  AllContainer,
  Container,
  HeadContainer,
  BookContainer,
  NameContainer,
  ContentContainer,
  ContentSort,
  ButtonContainer,
  MagnifyingGlass,
} from '../styles/RegisterBook';

import Button from 'react-bootstrap/Button';

const RegisterBook = () => {
  return (
    <AllContainer>
      <Container>
        <HeadContainer>
          예약관리 <span className="fa-solid fa-arrow-right-long" /> 예약등록
        </HeadContainer>
      </Container>
      예약관리 <span className="fa-solid fa-arrow-right-long" /> 예약등록
      <BookContainer>
        <NameContainer>예약 등록</NameContainer>
        <hr />
        <ContentContainer>
          <form>
            <ContentSort>
              <label htmlFor="resourceName">예약명</label>
              <input type="text" placeholder="회의실1" id="resourceName" />
            </ContentSort>
            <ContentSort>
              <label htmlFor="resourceChoice">자원선택</label>
              <input type="text" id="resourceChoice" />
              <MagnifyingGlass>
                <button className="fa-solid fa-magnifying-glass" />
              </MagnifyingGlass>
            </ContentSort>
            <ContentSort>
              <label htmlFor="totalUser">최대인원</label>
              <input type="text" id="totalUser" />
            </ContentSort>
            <ContentSort>
              <label htmlFor="option">옵션</label>
              <input type="text" id="option" />
            </ContentSort>
            <ContentSort>
              <label htmlfor="dataSort">연료</label>
              <select id="dataSort">
                <option value="1">휘발유</option>
                <option value="2">경유</option>
                <option value="3">전기</option>
              </select>
            </ContentSort>
            <ContentSort>
              <label htmlFor="resourceInfo">정보</label>
              <textarea cols="50" rows="5" id="resourceInfo" />
            </ContentSort>
            <ButtonContainer>
              <Button variant="primary">등록</Button>
            </ButtonContainer>
          </form>
        </ContentContainer>
      </BookContainer>
    </AllContainer>
  );
};

export default RegisterBook;
