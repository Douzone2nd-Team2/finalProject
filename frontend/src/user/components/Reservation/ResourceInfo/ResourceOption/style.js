import styled from 'styled-components';

const OptionComponent = styled.div`
  display: flex;
  text-align: center;
  background-color: white;
  margin: 0px 0px 24px;
`;

const IconInfo = styled.div`
  box-sizing: border-box;
`;

const Icon = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  background-color: blue;
`;

const OptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 0px 0px 16px;
`;

const OptionTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  margin: 0px 0px 4px;
  color: #434343;
`;

const OptionDetail = styled.div`
  font-size: 14px;
  color: #717171;
`;

export {
  OptionComponent,
  IconInfo,
  Icon,
  OptionInfo,
  OptionTitle,
  OptionDetail,
};
