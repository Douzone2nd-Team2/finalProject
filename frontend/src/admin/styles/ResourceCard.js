import styled from 'styled-components';

const ResourceCard = styled.div`
  a {
    text-decoration: none;
    color: black;
  }

  width: 220px;
  height: 100%;
  text-overflow: ellipsis;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;
const ResourceCardTitle = styled.div`
  font-size: large;
  font-weight: 600;
`;

const ResourceContent = styled.div`
  font-size: 12px;
`;

const ResourceCategory = styled.div`
  color: gray;
  font-size: 10px;
`;

export { ResourceCard, ResourceCardTitle, ResourceContent, ResourceCategory };
