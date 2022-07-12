import styled from 'styled-components';

const ReservationInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 400px;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  margin: 0px 0px 0px 80px;
  overflow: hidden;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  padding: 0px 0px 24px;
  border-bottom: 1px solid;
  border-bottom-color: rgb(221, 221, 221);
`;

const Thumbnail = styled.img`
  width: 120px;
  height: 100px;
  /* border: 1px solid rgb(221, 221, 221); */
  border: none;
  border-radius: 12px;
  background-color: black;
`;

const ThumnailInfo = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 12px;
`;

const NameCateDiv = styled.div`
  width: 200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const ResourceCate = styled.div`
  font-size: 12px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(113, 113, 113);
`;

const ResourceName = styled.div`
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  margin-top: 4px;
`;

const LocationDiv = styled.div`
  width: 200px;
  display: flex;
`;

const ResourceLocation = styled.div`
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  margin-top: 4px;
`;

export {
  ReservationInfo,
  ThumbnailContainer,
  Thumbnail,
  ThumnailInfo,
  NameCateDiv,
  ResourceCate,
  ResourceName,
  LocationDiv,
  ResourceLocation,
};
