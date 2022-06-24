import BookContainer from '../styles/BookItem';

const BookItem = ({ book }) => {
  const {
    location,
    title,
    ticket_type,
    discount_percent,
    price_origin,
    price_discounted,
    thumbnail,
  } = book;

  return (
    <BookContainer>
      <span>
        {thumbnail && (
          <div className="thumbnail">
            <img src={thumbnail} alt="thumbnail" />
          </div>
        )}
        <div className="contents">
          <div className="type">
            <span>{ticket_type}</span>
            <span className="discount">{discount_percent}할인</span>
          </div>
          <h3 className="location">{location}</h3>
          <h2 className="title">{title}</h2>
          <span className="price_origin">{price_origin}원</span>
          <span className="p_discount">{price_discounted}원~</span>
        </div>
      </span>
    </BookContainer>
  );
};

export default BookItem;
