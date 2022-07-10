import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #fafafa;
  position: fixed;
  top: 150px;
  left: 0;
  width: 190px;
  height: 320px;
  font-family: NanumGothicBold;
  z-index: 999;
  display: flex;
  border-radius: 0 12px 12px 0;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;

const SidebarContainer2 = styled.div`
  position: fixed;
  top: 150px;
  left: 0;
  button {
    background-color: white;
  }
`;

const ContentContainer = styled.div`
  padding: 20px 20px 0 20px;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  img {
    width: 110px;
    height: 150px;
  }
`;

const InfoContainer = styled.div`
  width: 110px;
  margin-top: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
`;

const NameContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 7px;
`;

const ToggleContainer = styled.div`
  display: flex;
  button {
    border: 0;
    outline: 0;
    background-color: #fafafa;
  }
  button: hover {
    color: darkgray;
  }
`;

const ToggleContainer2 = styled.div`
  position: fixed;
  top: 295px;
  left: 0;
  button {
    border: 0;
    outline: 0;
  }
  button: hover {
    color: darkgray;
  }
`;

export {
  SidebarContainer,
  SidebarContainer2,
  ContentContainer,
  ImageContainer,
  InfoContainer,
  NameContainer,
  ToggleContainer,
  ToggleContainer2,
};
