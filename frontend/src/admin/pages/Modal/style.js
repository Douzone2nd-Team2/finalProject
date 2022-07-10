import styled from 'styled-components';

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 600px;
  background-color: white;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  display: flex;
  margin: 24px;
  width: fit-content;
  height: fit-content;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const SearchInput = styled.input`
  margin: 3px;
  padding: 2px 12px;
  width: 200px;
  min-height: 32px;
  font-size: 18px;
  font-weight: 600;
  line-height: 36px;
  border: none;
  outline: none;
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  min-height: 32px;
  margin: 3px;
  padding: 8px;
  cursor: pointer;
  touch-action: manipulation;
  outline: none;
  background: transparent;
  color: #222222;
  border: none;
`;

const ModalBody = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  min-height: 32px;
  padding-top: 24px;
`;

const ModaldButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
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
  BackgroundContainer,
  ModalContainer,
  ModalHeader,
  SearchContainer,
  SearchInput,
  SearchButton,
  ModalBody,
  ModalButtonContainer,
  ModaldButton,
};
