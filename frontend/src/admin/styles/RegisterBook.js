import styled from 'styled-components';

const AllContainer = styled.div`
  font-family: NanumGothicBold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px 72px;
`;

const HeadContainer = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding-top: 30px;
  border-bottom: 4px solid black;
`;

const BookContainer = styled.div`
  background-color: #f6f6f6;
  border-radius: 15px;
  opacity: 0.9;
  box-shadow: 1.5px 1.5px 1.5px 1.5px gray;
  margin: 30px 24px;
`;

const NameContainer = styled.h1`
  margin-top: 5px;
  margin-left: 30px;
  padding-top: 15px;
  font-size: 30px;
  font-weight: 800;
`;

const SelectBoxDiv = styled.div`
  position: relative;
  bottom: 0%;
`;

const ResourceContainer2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 800;
`;

const ContentSort = styled.div`
  margin-top: 10px;
  margin-left: 40px;
  display: flex;
  justify-content: flex-start;
  label {
    min-width: 150px;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
`;

const MagnifyingGlass = styled.div`
  background-color: #f6f6f6;
  button {
    border: none;
  }
`;

const CountButtonContainer = styled.div`
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-left: 10px;
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
  background: #fff;
  color: #222222;
  text-align: inherit;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  /* box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px; */
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

const CategoryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  min-height: 20px;
  margin-left: 10px;
  padding: 3px;
  touch-action: manipulation;
  background: #000066;
  color: #f1f1f1;
  font-weight: 600;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
`;

const SubmitButton = styled.button`
  font-size: 18px;
  display: flex;
  justify-content: center;
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

const PeopleGridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
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

const PeopleContainer = styled.div`
  display: flex;
  margin-top: 24px;
  width: fit-content;
  height: fit-content;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  input {
    border: none;
    box-shadow: none;
  }
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

const EmptyContainer = styled.div`
  width: 220px;
  height: 100%;
`;

const EmptyRContainer = styled.div`
  width: 150px;
  height: 100%;
`;

export {
  AllContainer,
  Container,
  HeadContainer,
  BookContainer,
  NameContainer,
  ContentContainer,
  ContentSort,
  ButtonContainer,
  MagnifyingGlass,
  CountButtonContainer,
  CountButton,
  CountInfo,
  CategoryButton,
  SubmitButton,
  PeopleGridContainer,
  PeopleNameTag,
  PeopleContainer,
  PeopleInput,
  PeopleSearchButton,
  EmptyContainer,
  EmptyRContainer,
  SelectBoxDiv,
  ResourceContainer2,
};
