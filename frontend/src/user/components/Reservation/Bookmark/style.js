import styled from 'styled-components';

const BookmarkContainer = styled.button`
  display: flex;
  align-items: center;
  height: 34px;
  margin: 4px 0px 0px;
  padding: 8px;
  cursor: pointer;
  touch-action: manipulation;
  font-family: inherit;
  font-size: inherit;
  font-weight: 600;
  outline: none;
  background: transparent;
  border: none;
  color: #222222;
  text-align: inherit;
`;

const BookmarkDiv = styled.div`
  display: flex;
  align-items: center;
`;

const BookmarkIcon = styled.div`
  width: 26px;
  height: 100%;
`;

const BookmarkButton = styled.div`
  color: #222222;
`;

export { BookmarkContainer, BookmarkDiv, BookmarkIcon, BookmarkButton };
