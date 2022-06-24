import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 30px;
  background-color: #1296ec;
  font-weight: bold;
`;

const LogoContainer = styled.div`
  font-size: 35px;
  color: #0a58ca;
`;

const SearchContainer = styled.form`
  position: relative;
  margin-right: 100px;
  input {
    font-size: 12px;
    height: 30px;
    width: 350px;
    border-radius: 50px;
  }
  .fa-magnifying-glass {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
  }
`;

const Ul1 = styled.ul`
  text-align: center;
  width: 80px;
  list-style: none;
  line-height: 13px;
  margin-right: 30px;
  margin-top: 15px;
`;

const Ul2 = styled.ul`
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

const Margin1 = styled.div`
  margin-left: 100px;
  cursor: pointer;
`;

const Margin2 = styled.div`
  margin-left: 80px;
`;

const DropDown = styled.div`
  background-color: #1296ec;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  outline: none;
  position: relative;
  width: 250px;
`;

const ListContainer = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: lightgray;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 3px;
  margin-top: 23px;
  margin-left: 60px;
  position: absolute;
  z-index: 1000;
`;

const MenuContainer = styled.div`
  cursor: pointer;
  width: 80px;
`;

export {
  HeaderContainer,
  LogoContainer,
  SearchContainer,
  Ul1,
  Ul2,
  DropDown,
  ListContainer,
  Margin1,
  Margin2,
  MenuContainer,
};
