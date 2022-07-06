import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/cookie';

import Modal from '../components/Employee/PasswordModal';
import {
  Container,
  HeadContainer,
  TitleContainer,
  UserContainer,
  ImageContainer,
  NameContainer,
  ContentContainer,
  ContentSort,
  ButtonContainer,
} from '../styles/User';
import Button from 'react-bootstrap/Button';

const EmployeePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [modalOpen, setModalOpen] = useState(false);

  const [employee, setEmployee] = useState([]);
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일

  const [name, setName] = useState('');
  const [able, setAble] = useState('Y');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [empNo, setEmpNo] = useState('');
  const [deptName, setDeptName] = useState('');
  const [deptNo, setDeptNo] = useState(0);
  const [gradeNo, setGradeNo] = useState(0);
  const [gradeName, setGradeName] = useState(0);
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
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

  const fetchData = async () => {
    const param = { userNo: state };
    await axios
      .get(`${process.env.REACT_APP_SERVER_PORT}/admin/userview`, {
        params: param,
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((response) => {
        console.log(response.data.data[0]);
        setName(response.data.data[0].name);
        setAble(response.data.data[0].able);
        setUserId(response.data.data[0].userId);
        setEmpNo(response.data.data[0].empNo);
        setDeptNo(response.data.data[0].deptNo);
        setGradeNo(response.data.data[0].gradeNo);
        setBirth(response.data.data[0].birth);
        setPhone(response.data.data[0].phone);
        setEmail(response.data.data[0].email);
        setImageUrl(response.data.data[0].imageUrl);
        setEmployee(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeFile = (event) => {
    console.log(event.target.files);

    setImageUrl(event.target.files[0].name);

    setImgFile(event.target.files);
    setImgBase64([]);

    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]); //

        reader.onloadend = () => {
          const base64 = reader.result;
          console.log(base64);
          if (base64) {
            var base64Sub = base64.toString();
            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
          }
        };
      }
    }
  };

  // const postEmployee = async () => {
  //   axios.post(`${process.env.REACT_APP_SERVER_PORT}`);
  // };

  const postEmployee = async () => {
    const fd = new FormData();

    if (imgFile != null) {
      Object.values(imgFile).forEach((file) => fd.append('file', file));
    }

    console.log(able);
    const employee = {
      no: state,
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
    // console.log(employee);

    fd.append(
      'employee',
      new Blob([JSON.stringify(employee)], { type: 'application/json' }),
    );

    axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/admin/userfile`, fd, {
        headers: {
          Authorization: getCookie('accessToken'),
          'Content-Type': `multipart/form-data;`,
        },
      })
      .then((response) => {
        console.log(response);
        alert('사용자 정보가 수정되었습니다.');
        navigate('/admin');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    postEmployee();
  };

  const handleChangePw = () => {
    openModal();
  };

  const handleCancel = () => {
    navigate('/admin');
  };

  return (
    <>
      <Container>
        <HeadContainer>
          <TitleContainer>사용자관리</TitleContainer>
        </HeadContainer>
      </Container>
      <UserContainer>
        {/* <NameContainer>{employee.name}님</NameContainer>
        <hr /> */}
        <ContentContainer>
          <form>
            <ImageContainer>
              <label htmlFor="profileImage">프로필 사진</label>
              {imageUrl ? (
                <img alt="no image" src={imageUrl} id="profileImage" />
              ) : (
                <div>
                  <span class="fa-solid fa-circle-user fa-9x"></span>
                  {/* <p>기본이미지</p> */}
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
              <input type="password" defaultValue="1234" id="password" />
              <Button variant="warning" onClick={handleChangePw}>
                변경
              </Button>
            </ContentSort>
            <ContentSort>
              <label htmlFor="userId">아이디</label>
              <input type="text" defaultValue={userId} id="useId" />
              <label htmlFor="empNo">사원번호</label>
              <input type="text" defaultValue={empNo} id="empNo" />
            </ContentSort>
            <ContentSort>
              <label htmlFor="dept">부서</label>
              {/* <input type="text" value={employee.deptName} id="deptName" /> */}
              <select name="dept" id="dept" onChange={handleDept}>
                <option value="1" selected={deptNo === 1}>
                  {' '}
                  영업
                </option>
                <option value="3" selected={deptNo === 3}>
                  {' '}
                  인사
                </option>
                <option value="4" selected={deptNo === 4}>
                  {' '}
                  개발
                </option>
              </select>

              <label htmlFor="grade">직급</label>
              {/* <input type="text" value={employee.gradeName} id="gradeName" /> */}
              <select name="grade" id="grade" onChange={handleGrade}>
                <option value="1" selected={gradeNo === 1}>
                  {' '}
                  사원
                </option>
                <option value="2" selected={gradeNo === 2}>
                  {' '}
                  대리
                </option>
                <option value="3" selected={gradeNo === 3}>
                  {' '}
                  팀장
                </option>
              </select>
            </ContentSort>
            <ContentSort>
              <label htmlFor="birth">생일</label>
              <input type="text" defaultValue={birth} id="birth" />
            </ContentSort>
            <ContentSort>
              <label htmlFor="phone">전화번호</label>
              <input type="text" defaultValue={phone} id="phone" />
            </ContentSort>
            <ContentSort>
              <label htmlFor="email">이메일</label>
              <input type="text" defaultValue={email} id="email" />
            </ContentSort>
            <ButtonContainer>
              <Button variant="secondary" onClick={handleCancel}>
                취소
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                수정
              </Button>
            </ButtonContainer>
          </form>
        </ContentContainer>
      </UserContainer>
      <Modal
        open={modalOpen}
        close={closeModal}
        userNo={state}
        header="비밀번호 변경"
      ></Modal>
    </>
  );
};

export default EmployeePage;
