import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  padding: 42px 0px 0px;
  margin-top: 24px;
`;

const HeaderTop = styled.div`
  display: flex;
  height: 30px;
  padding: 0px 0px 4px;
`;

const HeaderBottom = styled.div`
  display: flex;
  height: 28px;
  flex-direction: row-reverse;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 34px;
`;

export { Header, HeaderTop, HeaderBottom, Title };
