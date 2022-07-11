import React, { useState, useEffect } from 'react';
import { resolvePath, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/cookie';

import Modal from '../components/Employee/PasswordModal';
import {
  AllContainer,
  FlexContainer,
  Container,
  HeadContainer,
  TitleContainer,
  UserContainer,
  ImageContainer,
  ContentContainer,
  ContentSort,
  ButtonContainer,
  SelectDiv,
} from '../styles/User';
import Button from 'react-bootstrap/Button';

const EmployeeRegistPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [able, setAble] = useState('Y');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCh, setPasswordCh] = useState('');
  const [empNo, setEmpNo] = useState('');
  const [deptName, setDeptName] = useState('');
  const [deptNo, setDeptNo] = useState(1);
  const [gradeNo, setGradeNo] = useState(1);
  const [gradeName, setGradeName] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState('');

  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleUserId = (e) => {
    setUserId(e.target.value);
  };
  const handleEmpNo = (e) => {
    setEmpNo(e.target.value);
  };
  const handleBirth = (e) => {
    setBirth(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordCh = (e) => {
    setPasswordCh(e.target.value);
  };
  const handleDept = (e) => {
    setDeptNo(e.target.value);
  };
  const handleGrade = (e) => {
    setGradeNo(e.target.value);
  };
  const handleAble = (e) => {
    if (able == 'Y') {
      setAble('N');
    } else if (able == 'N') {
      setAble('Y');
    }
  };

  const handleCancel = () => {
    navigate('/admin/main');
  };

  const handleChangeFile = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    new Promise((reslove) => {
      reader.onload = () => {
        setImage(reader.result);
      };
    });

    setImageUrl(event.target.files[0].name);

    setImgFile(event.target.files);
    setImgBase64([]);

    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]); //

        reader.onloadend = () => {
          const base64 = reader.result;
          if (base64) {
            var base64Sub = base64.toString();
            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
          }
        };
      }
    }
  };

  const postEmployee = async () => {
    const fd = new FormData();

    if (imgFile != null) {
      Object.values(imgFile).forEach((file) => fd.append('file', file));
    }

    const employee = {
      name: name,
      able: able,
      userId: userId,
      password: password,
      empNo: empNo,
      deptNo: deptNo,
      gradeNo: gradeNo,
      birth: birth,
      phone: phone,
      email: email,
      imageUrl: imageUrl,
    };

    fd.append(
      'employee',
      new Blob([JSON.stringify(employee)], { type: 'application/json' }),
    );

    axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/admin/usersave`, fd, {
        headers: {
          Authorization: getCookie('accessToken'),
          'Content-Type': `multipart/form-data;`,
        },
      })
      .then((response) => {
        alert('사용자 정보가 등록되었습니다.');
        navigate('/admin/main');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    postEmployee();
  };

  return (
    <>
      <FlexContainer>
        <HeadContainer>
          <TitleContainer>사용자관리</TitleContainer>
        </HeadContainer>
        <UserContainer>
          <ContentContainer>
            <form>
              <ImageContainer>
                <label htmlFor="profileImage">프로필 사진</label>
                {imageUrl ? (
                  <img alt="imagePreview" src={image} id="profileImage" />
                ) : (
                  <div>
                    <span class="fa-solid fa-circle-user fa-9x" />
                  </div>
                )}
                <div className="fileInput">
                  <input
                    type="file"
                    id="file"
                    name="image"
                    onChange={handleChangeFile}
                  />
                </div>
              </ImageContainer>

              <ContentSort>
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  defaultValue={name}
                  id="name"
                  onChange={handleName}
                />
                <label htmlFor="albe">사용자 사용여부</label>
                <input
                  type="checkbox"
                  id="able"
                  checked={able == 'Y'}
                  onChange={handleAble}
                />
              </ContentSort>
              <ContentSort>
                <label htmlFor="password">비밀번호</label>
                <input
                  type="password"
                  value={password}
                  id="password"
                  onChange={handlePassword}
                />
                <label htmlFor="passwordCh">비밀번호 확인</label>
                <input
                  type="password"
                  value={passwordCh}
                  id="passwordCh"
                  onChange={handlePasswordCh}
                />
              </ContentSort>
              <ContentSort>
                <label htmlFor="userId">아이디</label>
                <input
                  type="text"
                  defaultValue={userId}
                  id="useId"
                  onChange={handleUserId}
                />
                <label htmlFor="empNo">사원번호</label>
                <input
                  type="text"
                  defaultValue={empNo}
                  id="empNo"
                  onChange={handleEmpNo}
                />
              </ContentSort>
              <ContentSort>
                <label htmlFor="dept">부서</label>

                <select name="dept" id="dept" onChange={handleDept}>
                  <option value="1"> 인사부</option>
                  <option value="2"> 총무부</option>
                  <option value="3"> 회계부</option>
                  <option value="4"> 기획부</option>
                  <option value="5"> 영업부</option>
                  <option value="6"> 개발부</option>
                </select>

                <label htmlFor="grade">직급</label>

                <select name="grade" id="grade" onChange={handleGrade}>
                  <option value="1">사원</option>
                  <option value="2">주임</option>
                  <option value="3">팀장</option>
                  <option value="4">과장</option>
                  <option value="5">차장</option>
                  <option value="6">부장</option>
                </select>
              </ContentSort>
              <ContentSort>
                <label htmlFor="birth">생일</label>
                <input
                  type="text"
                  defaultValue={birth}
                  id="birth"
                  onChange={handleBirth}
                />
              </ContentSort>
              <ContentSort>
                <label htmlFor="phone">전화번호</label>
                <input
                  type="text"
                  defaultValue={phone}
                  id="phone"
                  onChange={handlePhone}
                />
              </ContentSort>
              <ContentSort>
                <label htmlFor="email">이메일</label>
                <input
                  type="text"
                  value={email}
                  id="email"
                  onChange={handleEmail}
                />
              </ContentSort>
              <ButtonContainer>
                <Button variant="secondary" onClick={handleCancel}>
                  취소
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  등록
                </Button>
              </ButtonContainer>
            </form>
          </ContentContainer>
        </UserContainer>
      </FlexContainer>
    </>
  );
};

export default EmployeeRegistPage;
