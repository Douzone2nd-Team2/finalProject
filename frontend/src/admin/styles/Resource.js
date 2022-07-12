import styled from 'styled-components';

export const AllContainer = styled.div`
  font-family: NanumGothicBold;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 1200px;
  padding: 0px 72px;
`;

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 0px 72px;
`;

export const ResourceContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid black;
  font-size: 30px;
  font-weight: 600;
`;
export const ResourceContainer2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: right;
`;

export const ContentContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 800;
`;

export const BookContainer = styled.div`
  margin-top: 30px;
  background-color: #f6f6f6;
  border-radius: 15px;
  opacity: 0.9;
  box-shadow: 1.5px 1.5px 1.5px 1.5px gray;
  padding: 24px;
`;

export const ContentSort = styled.div`
  margin-top: 10px;
  margin-left: 40px;
  display: flex;
  justify-content: flex-start;
  label {
    min-width: 150px;
  }
  .Rable {
    box-shadow: none;
  }
  .totaluser {
    display: flex;
    align-items: center;
  }
  input {
    margin-left: 10px;
    padding: 3px 8px;
    /* border-radius: 4px;
    border: none; */
    border: 1px solid rgb(221, 221, 221);
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  }
  textarea {
    min-width: 700px;
    margin-left: 10px;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid #717171;
  }
`;

export const ResourceImg = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  flex-direction: column;
  .img {
    width: 300px;
    height: 300px;
  }

  .slick-list {
    width: 200px;
  }

  .slick-initialized {
    width: 200px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;

export const Forminput = styled.div`
  margin-top: 30px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 800;
  float: right;
`;
export const ResourceCardUI = styled.div`
  width: 100%;
  height: 100%;
  font-size: 10px;
  overflow: hidden;
  padding: 0px 24px;
`;
export const ResourcePagenation = styled.div`
  position: relative;
  bottom: 0%;
`;

export const SelectBoxDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
`;
