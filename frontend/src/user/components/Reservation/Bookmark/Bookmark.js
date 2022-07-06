import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {
  BookmarkContainer,
  BookmarkDiv,
  BookmarkIcon,
  BookmarkButton,
} from './style.js';

const Bookmark = () => {
  return (
    <BookmarkContainer>
      <BookmarkDiv>
        <BookmarkIcon>
          <StarBorderIcon></StarBorderIcon>
        </BookmarkIcon>
        <BookmarkButton>저장</BookmarkButton>
      </BookmarkDiv>
    </BookmarkContainer>
  );
};

export default Bookmark;
