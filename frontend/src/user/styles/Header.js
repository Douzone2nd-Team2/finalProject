import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #1296ec;
  font-weight: bold;
  font-family: NanumGothicBold;
`;

const LogoContainer = styled.div`
  font-size: 40px;
  color: #0a58ca;
`;

const SearchContainer = styled.form`
  position: relative;
  margin-left: 170px;
  //margin: auto;
  //margin-right: 100px;
  input {
    //border: 1px solid black;
    font-size: 18px;
    font-weight: 600;
    width: 500px;
    border: none;
    border-radius: 30px;
    padding: 6px 16px;
    line-height: 32px;
    color: #434343;
  }
  input:focus {
    outline: 1px solid black;
    //border: none;
  }
  button {
    border: none;
    background-color: transparent;
  }
  .fa-magnifying-glass {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8px;
    cursor: pointer;
  }
`;

const HeaderRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  cursor: pointer;
  color: white;
  font-size: 16px;
  margin-right: 20px;
`;

const DropDownContainer = styled.div`
  background-color: #1296ec;
  font-weight: bold;
  border: none;
  outline: none;
  position: relative;
  padding-right: 20px;
  //padding-right: 30px;
  //width: 250px;
`;

// const BookList = styled.ul`
//   text-align: center;
//   width: 70px;
//   font-size: 12px;
//   list-style: none;
//   line-height: 13px;
//   margin-right: 30px;
//   margin-top: 20px;
// `;

const MyPageList = styled.ul`
  text-align: center;
  width: 80px;
  list-style: none;
  font-size: 12px;
  line-height: 15px;
  margin-right: 30px;
  margin-top: 15px;
  li a {
    text-decoration: none;
    color: black;
  }
`;

const MyPageListContainer = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: white;
  color: black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  padding: 3px;
  margin-top: 28px;
  margin-left: -22px;
  position: absolute;
  z-index: 1000;
`;

// const BookListContainer = styled.div`
//   border: 1px solid ${(props) => props.theme.borderColor};
//   background-color: white;
//   color: black;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 2px;
//   padding: 3px;
//   margin-top: 28px;
//   margin-left: -38px;
//   position: absolute;
//   z-index: 1000;
// `;

const ButtonContainer = styled.div`
  button {
    font-weight: bold;
    outline: none;
    background-color: #1296ec;
    color: white;
    border: none;
    //border-radius: 10px;
  }
`;

const VerticalLine = styled.div`
  height: 24px;
  margin-left: 20px;
  border-left: 1px solid white;
`;

export {
  HeaderContainer,
  LogoContainer,
  SearchContainer,
  MyPageList,
  DropDownContainer,
  MyPageListContainer,
  MenuContainer,
  HeaderRightContainer,
  ButtonContainer,
  VerticalLine,
};
