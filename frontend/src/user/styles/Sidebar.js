import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #dcdcdc;
  position: fixed;
  top: 143px;
  bottom: 90px;
  left: 0;
  width: 150px;
  height: 360px;
  font-family: NanumGothicBold;
`;

const ContentContainer = styled.div`
  padding: 30px 30px 0 30px;
  display: flex;
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
  margin-top: 25px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
`;

const NameContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export {
  SidebarContainer,
  ContentContainer,
  ImageContainer,
  InfoContainer,
  NameContainer,
};
