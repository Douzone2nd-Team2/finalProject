import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { getCookie } from '../../utils/cookie';

import BookContainer from '../../styles/BookItem';

const BookItem = ({ book }) => {
  const { resourceName, startTime, endTime, imageUrl, reservName, reservNo } =
    book;

  const [startDate, startT] = startTime.split('T');
  const [endDate, endT] = endTime.split('T');

  const navigate = useNavigate();

  const clickBtn = (e, reservNo) => {
    e.preventDefault();
    axiosGetMyReservationInfo(reservNo);
  };

  const axiosGetMyReservationInfo = async (reservNo) => {
    const myReservationInfo = await axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/mypage/getMyReservationInfo`,
        reservNo,
        {
          headers: {
            Authorization: getCookie('accessToken'),
            'Content-type': 'application/json',
          },
        },
      )
      .then((res) => {
        if (res.data.resCode === 4001) {
          alert('[ERROR] 알 수 없는 오류가 발생하였습니다.');
          return;
        } else {
          navigate('/mypage/reservation', {
            state: res.data.data,
          });
          return res.data.data;
        }
      })
      .catch(console.error);
  };

  return (
    <BookContainer onClick={(e) => clickBtn(e, book.reservNo)}>
      {imageUrl && (
        <div className="thumbnail">
          <img src={imageUrl} alt="No Image" />
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
