import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #dcdcdc;
  position: fixed;
  top: 150px;
  left: 0;
  width: 180px;
  height: 320px;
  font-family: NanumGothicBold;
  z-index: 999;
  display: flex;
`;

const SidebarContainer2 = styled.div`
  position: fixed;
  top: 114px;
  left: 0;
  width: 180px;
  height: 100px;
  font-family: NanumGothicBold;
  display: flex;
`;

const ContentContainer = styled.div`
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
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
  align-items: center;
  margin-right: 15px;
  button {
    border: 0;
    outline: 0;
    background-color: #dcdcdc;
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
};
