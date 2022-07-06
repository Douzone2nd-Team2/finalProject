import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  width: 100%;
`;

const UserInfoContainer = styled.div`
  position: relative;
  flex: 1 1 0%;
  padding: 0px 0px 4px;
  overflow: hidden;
`;

const UserInfoTitle = styled.div`
  position: absolute;
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

const UserInfoDetail = styled.div`
  min-height: 56px;
  width: 100%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 26px 12px 10px 10px;
  background-color: transparent;
  font-family: inherit;
  font-size: 16px;
  font-weight: inherit;
  line-height: 18px;
  appearance: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(113, 113, 113);
`;

export { FlexContainer, UserInfoContainer, UserInfoTitle, UserInfoDetail };
