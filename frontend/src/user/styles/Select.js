import styled from 'styled-components';

const Container = styled.div`
  font-family: NanumGothic;
  width: 450px;
  border-radius: 5px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px gray;
`;

const SelectContainer = styled.div`
  select {
    float: right;
    margin-top: 11px;
    margin-right: 170px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 2px 2px;
    border: 1px solid #999;
    border-radius: 0px;
  }
  select::-ms-expand {
    display: none;
  }
  select:focus {
    color: #222;
    outline: none;
    border-color: #66afe9;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }

  option {
    text-align: center;
  }
`;

const BchartContainer = styled.div`
  margin-bottom: 10px;
`;

export { Container, SelectContainer, BchartContainer };
