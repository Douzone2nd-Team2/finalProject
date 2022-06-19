import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 40px;
  margin-left: -10px;
  margin-right: -15px;
  background-color: #1296ec;
  line-height: 40px;
  font-size: 1rem;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  margin-left: 50px;
  position: relative;
  input {
    font-size: 12px;
    padding: 0;
    height: 50px;
    width: 330px;
    border-radius: 50px;
    line-height: 30px;
  }
  .fa-magnifying-glass {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
  }
`;

const Li = styled.li`
  list-style: none;
`;

const Ul1 = styled.ul`
  width: 80px;
  list-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #666666;
  line-height: 15px;
  margin-right: 30px;
  margin-top: 15px;
`;

const Ul2 = styled.ul`
  width: 80px;
  list-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  color: #666666;
  line-height: 15px;
  margin-right: 30px;
  margin-top: 15px;
`;

const DropDown = styled.button`
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
  margin-top: 15px;
  margin-left: 60px;
  position: absolute;
  display: none;
  z-index: 1000;
  ${DropDown}:active & {
    display: block;
  }
  ${DropDown}:focus & {
    display: block;
  }
`;

export {
  HeaderContainer,
  SearchContainer,
  Li,
  Ul1,
  Ul2,
  DropDown,
  ListContainer,
};
