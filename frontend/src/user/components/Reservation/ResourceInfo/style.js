import styled from 'styled-components';

const ResourceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ResourceImageTest = styled.div`
  width: 100%;
  height: 400px;
  padding-bottom: 24px;
`;

const ResourceDetatilTest = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  padding-top: 32px;
  padding-bottom: 32px;
  border-top: 1px solid;
  border-top-color: rgb(221, 221, 221);
`;

const ThumbnailDiv = styled.div`
  overflow: hidden;
`;

export {
  ResourceInfoContainer,
  ResourceImageTest,
  ResourceDetatilTest,
  ThumbnailDiv,
};
