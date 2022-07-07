import axios from 'axios';
import React, { useState, useRef } from 'react';
import { getCookie } from '../../utils/cookie';

import {
  PasswordContainer,
  ContentSort,
  WarningContainer,
} from '../../styles/PasswordModal';
import { useEffect } from 'react';

const Modal = (props) => {
  const closeModal = useRef(null);
  const { open, close, header, userNo } = props;

  const [password, setPassword] = useState('');
  const [passwordCh, setPasswordCh] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handlePw = (e) => {
    setPassword(e.target.value);
    setPasswordError(e.target.value !== passwordCh);
    console.log(passwordError);
  };

  const handlePwCh = (e) => {
    setPasswordCh(e.target.value);
    setPasswordError(e.target.value !== password);
    console.log(passwordError);
  };

  const pwSubmit = () => {
    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return false;
    }
    if (!passwordCh) {
      alert('비밀번호 확인을 입력해주세요.');
      return false;
    }
    if (passwordError) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      return false;
    }
    fetchData();
  };

  const fetchData = async () => {
    const body = { userNo: userNo, password: password };
    console.log(body);
    await axios
      .post(`${process.env.REACT_APP_SERVER_PORT}/admin/user/changepw`, body, {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      })
      .then((response) => {
        console.log(response);
        alert('비밀번호가 변경되었습니다.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleModal = () => {
    closeModal.current.click();
  };

  useEffect(() => {
    console.log(open);
  }, [open]);
  return (
    <>
      <PasswordContainer>
        <div className={open ? 'openModal modal' : 'modal'}>
          {open ? (
            <section>
              <header>
                {header}
                <button className="close" onClick={close} ref={closeModal}>
                  &times;
                </button>
              </header>
              <main>
                <ContentSort>
                  <span>비밀번호</span>
                  <input
                    type="password"
                    defaultValue={password}
                    onChange={handlePw}
                  ></input>
                  <span>비밀번호 확인</span>
                  <input
                    type="password"
                    defaultValue={passwordCh}
                    onChange={handlePwCh}
                  ></input>
                </ContentSort>
              </main>
              <footer>
                <WarningContainer>
                  {passwordError && <span>비밀번호가 일치하지 않습니다.</span>}

                  <button
                    className="close"
                    onClick={(e) => {
                      pwSubmit();
                      toggleModal();
                    }}
                  >
                    변경
                  </button>
                </WarningContainer>
              </footer>
            </section>
          ) : null}
        </div>
      </PasswordContainer>
    </>
  );
};

export default Modal;
