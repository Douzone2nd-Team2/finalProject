import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const PieContainer = styled.div`
  background-color: #f6f6f6;
  width: 450px;
  height: 400px;
  box-shadow: 1px 1px #e2e2e2;
  position: relative;
`;

const InnerContainer = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  width: 400px;
  height: 300px;
  /* display: flex;
  justify-content: center; */
`;

const TitleContainer = styled.div`
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: black;
  font-size: 15px;
  font-weight: bolder;
  background-color: #e2e2e2;
  width: 450px;
`;

const LegendContainer = styled.div`
  width: 170px;
  position: absolute;
  top: 32%;
  transform: translateY(-50%);
  right: -15px;
`;

export {
  Container,
  TitleContainer,
  PieContainer,
  InnerContainer,
  LegendContainer,
};
