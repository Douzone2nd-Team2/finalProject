import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  width: 100%;
  height: 100%;
`;

const CountButtonContainer = styled.div`
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const CountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  min-height: 32px;
  margin: 4px 0px 0px;
  padding: 8px;
  cursor: pointer;
  touch-action: manipulation;
  outline: none;
  background: transparent;
  color: #222222;
  text-align: inherit;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const CountInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 56px;
  min-height: 56px;
  font-family: inherit;
  font-size: 24px;
  font-weight: 800;
  line-height: 18px;
  text-overflow: ellipsis;
  margin: 4px 8px 0px 8px;
  padding: 8px;
  color: rgb(34, 34, 34);
`;

const PeopleContainer = styled.div`
  display: flex;
  margin-top: 24px;
  width: fit-content;
  height: 100%;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const CountInfoTitle = styled.div`
  position: relative;
  top: 12px px;
  left: 12px;
  right: 12px;
  margin: 0px;
  padding: 0px;
  pointer-events: none;
  font-size: 12px;
  line-height: 12px;
  color: rgb(34, 34, 34);
  text-transform: uppercase;
  font-weight: 800;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PeopleInput = styled.input`
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

const PeopleSearchButton = styled.button`
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

const PeopleGridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  padding-top: 18px;
`;

const PeopleNameTag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-top: 8px;
  padding: 4px 8px;
  min-height: 32px;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

export {
  FlexContainer,
  CountButtonContainer,
  CountButton,
  CountInfo,
  PeopleContainer,
  PeopleInput,
  PeopleSearchButton,
  PeopleGridContainer,
  PeopleNameTag,
  CountInfoTitle,
};
