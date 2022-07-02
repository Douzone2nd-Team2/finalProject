import BookContainer from '../styles/BookItem';

const BookItem = ({ book }) => {
  const { resourceName, startTime, endTime, imageUrl, reservName } = book;

  const [startDate, startT] = startTime.split('T');
  const [endDate, endT] = endTime.split('T');

  return (
    <BookContainer>
      {imageUrl && (
        <div className="thumbnail">
          <img src={imageUrl} alt="thumbnail" />
        </div>
      )}
      <div className="contents">
        <div className="resouceName">{resourceName}</div>
        <div className="startTime">
          {startDate} <br />
          {startT.slice(0, 5)}
        </div>
        <div>~</div>
        <div className="endTime">
          {endDate}
          <br />
          {endT.slice(0, 5)}
        </div>
        <br />
        <div className="reservName">{reservName}</div>
      </div>
    </BookContainer>
  );
};

export default BookItem;
