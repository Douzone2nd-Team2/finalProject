import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1.5%;
  background-color: rgb(222, 222, 222);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const RightContainer = styled.div`
  position: relative;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Address = styled.div`
  width: 100%;
  text-align: center;
  font-size: 10px;
  font-weight: bolder;
`;

const DivContainer = styled.div`
  display: flex;
  padding: 0;
  span {
    margin-right: 10px;
    width: 100%;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 10px;
  }
`;

const IconContainer = styled.span`
  margin-right: 10px;
  width: 100%;
  font-size: 20px;
  margin-left: 10px;
  margin-top: 10px;
`;

const UnderLine = styled.div`
  width: 150px;
  text-align: center;
  text-decoration: underline;
  padding-bottom: 10px;
`;

const VerticalLine = styled.div`
  height: 24px;
  padding-left: 20px;
  border-left: 1px solid black;
`;
export {
  FooterContainer,
  RightContainer,
  Address,
  DivContainer,
  IconContainer,
  UnderLine,
  VerticalLine,
};
