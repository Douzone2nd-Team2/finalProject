import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 1000px;
  padding: 0px 72px;
`;

export const ResourceContainer = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding-top: 30px;
  border-bottom: 4px solid black;
  width: 100%;
  height: auto;
`;
export const ResourceContainer2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ResourceForm = styled.form`
  border: 1px solid black;
  margin: auto;
  margin-top: 30px;
  padding: 4px;
  width: 700px;
  height: auto;
`;
export const ButtonContainer = styled.div`
  float: right;
  margin-top: 10px;
`;

export const Formtd = styled.td`
  background-color: lightgrey;
  border: 1px solid black;
  width: 200px;
  height: 50px;

  padding-left: 10px;
`;

export const Forminput = styled.div`
  padding: 10px;
  margin: 1px;
  margin-left: 3px;
  border: 1px solid black;
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
