import styled from 'styled-components';

const SelectContainer = styled.div`
  select {
    float: right;
    margin-top: 13px;
    margin-right: 170px;
  }
  select:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
`;

const BchartContainer = styled.div`
  margin-bottom: 10px;
`;

export { SelectContainer, BchartContainer };
