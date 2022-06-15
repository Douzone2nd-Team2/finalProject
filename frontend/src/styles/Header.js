import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  background-color: #1296ec;
  line-height: 40px;
  font-size: 25px;
`;

const SearchContainer = styled.div`
  input {
    font-size: 12px;
    padding: 0;
    height: 20px;
    width: 330px;
    border-radius: 10px;
    line-height: 30px;
  }
`;

export { HeaderContainer, SearchContainer };
