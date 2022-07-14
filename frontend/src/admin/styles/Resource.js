import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1000px;
  padding: 0px 72px;
`;

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

export const ResourceContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid black;
  font-size: 30px;
  font-weight: 600;
  width: 100%;
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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
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
    border: 1px solid rgb(221, 221, 221);
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  }
  textarea {
    min-width: 00px;
    margin-left: 10px;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid #717171;
  }
`;

export const ResourceImg = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  padding-top: 18px;

  padding-bottom: 40px;
  .slick-list {
    width: 400px;
  }

  .slick-initialized {
    width: 400px;
  }

  img {
    width: 300px;
    height: 200px;
    padding: 12px;
    margin: 6px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 16px;
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

export const FileInputAndButtonContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: right;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  font-size: 16px;
  align-items: center;
  width: 80px;
  margin-left: 10px;
  padding: 8px;
  cursor: pointer;
  touch-action: manipulation;
  background: rgb(13, 110, 253);
  color: #f1f1f1;
  font-weight: 600;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
`;
