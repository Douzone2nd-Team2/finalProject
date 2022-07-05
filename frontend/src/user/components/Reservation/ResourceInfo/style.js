import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1200px;
  min-height: 100vh;
  overflow: hidden;
  margin: 0px 120px;
  padding: 0px 80px;
  font-family: 'Nanum Gothic', sans-serif;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 24px;
`;

const ResourceHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  padding: 24px 0px 0px;
`;

const ResourceHeaderTop = styled.div`
  display: flex;
  height: 30px;
  padding: 0px 0px 4px;
`;

const ResourceHeaderBottom = styled.div`
  display: flex;
  height: 28px;
  flex-direction: row-reverse;
`;

const ResourceTitle = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 34px;
`;

const ResourceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  margin: 0px 0px 0px 80px;
`;

const ResourceImageTest = styled.div`
  width: 100%;
  height: 400px;
  background-color: skyblue;
  position: relative;
  padding-bottom: 24px;
`;

const ResourceDetatilTest = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  padding-top: 32px;
  padding-bottom: 32px;
  border-top: 1px solid;
  border-top-color: rgb(221, 221, 221);
`;

const CalendarTest = styled.div`
  width: 100%;
  height: 400px;
  background-color: skyblue;
  position: relative;
`;

const CalendarDetatilTest = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  position: relative;
  padding: 20px;
`;

export {
  MainContainer,
  Container,
  ResourceInfoContainer,
  CalendarContainer,
  ResourceImageTest,
  ResourceDetatilTest,
  CalendarTest,
  CalendarDetatilTest,
  ResourceHeader,
  ResourceHeaderTop,
  ResourceHeaderBottom,
  ResourceTitle,
};
