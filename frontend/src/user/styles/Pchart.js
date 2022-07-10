import styled from 'styled-components';

const PieContainer = styled.div`
  background-color: #f6f6f6;
  width: 450px;
  height: 400px;
  position: relative;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;

const InnerContainer = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  width: 400px;
  height: 300px;
`;

const TitleContainer = styled.div`
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: black;
  font-size: 20px;
  font-weight: bolder;
  background-color: #e2e2e2;
  border-radius: 12px 12px 0px 0px;
  width: 450px;
`;

const LegendContainer = styled.div`
  width: 170px;
  position: absolute;
  top: 32%;
  transform: translateY(-50%);
  right: -15px;
`;

export { TitleContainer, PieContainer, InnerContainer, LegendContainer };
