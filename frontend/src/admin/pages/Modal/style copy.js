import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid rgb(221, 221, 221);
  padding-top: 18px;
  padding-right: 18px;
`;

const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 18px;
  overflow-y: scroll;
`;

const ListRow = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: fit-content;
`;

const ListContent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px 0px;
  padding: 12px 8px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  border: none;
`;

const ListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  min-height: 36px;
  margin: 3px;
  padding: 8px;
  cursor: pointer;
  touch-action: manipulation;
  background: #1296ec;
  color: #f1f1f1;
  font-weight: 600;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
`;

export {
  ListContainer,
  ListHeader,
  ListBody,
  ListRow,
  ListContent,
  ListButton,
};
