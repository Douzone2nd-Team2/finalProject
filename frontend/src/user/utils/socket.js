import SockJS from 'sockjs-client';
import { over } from 'stompjs';
import { getCookie } from './cookie.js';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/user';

let stompClient = null;

const connection = () => {
  const socket = new SockJS(`${process.env.REACT_APP_SERVER_PORT}/ws`);
  stompClient = over(socket);
  const headers = {
    Authorization: getCookie('accessToken'),
  };
  stompClient.connect(headers, onConnected, onError);
};

const onConnected = () => {};

const onSubscribe = (userNo, onMessageReceived) => {
  setTimeout(function () {
    stompClient.subscribe('/user/' + userNo + '/do', onMessageReceived);
  }, 500);
};

const onError = console.error;

const sendMessage = async (url, chatMessage) => {
  await stompClient.send(url, {}, JSON.stringify(chatMessage));
};

const disconnection = () => {
  stompClient.disconnect(console.log('연결 해제'));
};

export { connection, sendMessage, onSubscribe, disconnection };
