import { VictoryPie } from 'victory';

import { Container, TitleContainer, PieContainer } from '../styles/Pchart';

const DATA = [
  { x: '회의실', y: 80 },
  { x: '차량', y: 65 },
  { x: '비품', y: 65 },
];

const PChart = () => {
  return (
    <>
      <TitleContainer>자주 사용하는 자원</TitleContainer>
      <Container>
        <PieContainer>
          <VictoryPie
            data={DATA}
            width={210}
            height={210}
            startAngle={130}
            endAngle={600}
            innerRadius={100}
            colorScale={['red', 'yellow', 'green']}
          />
        </PieContainer>
      </Container>
    </>
  );
};

export default PChart;
