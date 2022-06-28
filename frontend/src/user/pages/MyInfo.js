import { useState, useEffect } from 'react';
import axios from 'axios';

import { useRecoilValue } from 'recoil';

import { tokenState } from '../recoil/token';

import {
  Container,
  TitleContainer,
  InfoContainer,
  ImgContainer,
  ContentContainer,
} from '../styles/MyInfo';

import profile from '../assets/profile.jpeg';

const MyInfo = () => {
  const token = useRecoilValue(tokenState);
  const [userInfo, setUserInfo] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_PORT}/mypage/view`,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    console.log(res.data);
    console.log(res.data.data.name);
    setUserInfo(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <TitleContainer>사원 정보</TitleContainer>
        <hr />
        <InfoContainer>
          <ImgContainer>
            <img src={profile} alt="Profile" />
          </ImgContainer>
          <form>
            <ContentContainer>
              <label htmlFor="name">이름</label>
              <input
                type="text"
                name="name"
                id="name"
                disabled="disabled"
                value={userInfo.name || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="id">아이디</label>
              <input
                type="text"
                name="id"
                id="id"
                disabled="disabled"
                value={userInfo.userId || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="birth">생년월일</label>
              <input
                type="text"
                name="birth"
                id="birth"
                disabled="disabled"
                value={userInfo.birth || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="dept">부서</label>
              <input
                type="text"
                name="dept"
                id="dept"
                disabled="disabled"
                value={userInfo.deptNo || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="rank">직급</label>
              <input
                type="text"
                name="rank"
                id="rank"
                disabled="disabled"
                value={userInfo.gradeNo || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="wnum">사원번호</label>
              <input
                type="num"
                name="wnum"
                id="wnum"
                disabled="disabled"
                value={userInfo.empNo || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="pnum">전화번호</label>
              <input
                type="tel"
                name="pnum"
                id="pnum"
                disabled="disabled"
                value={userInfo.phone || ''}
              />
            </ContentContainer>
            <ContentContainer>
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                name="email"
                id="email"
                disabled="disabled"
                value={userInfo.email || ''}
              />
            </ContentContainer>
          </form>
        </InfoContainer>
      </Container>
    </>
  );
};

export default MyInfo;
