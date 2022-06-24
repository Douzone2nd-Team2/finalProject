import { VictoryPie, VictoryLegend } from 'victory';

import {
  Container,
  TitleContainer,
  PieContainer,
  InnerContainer,
  LegendContainer,
} from '../styles/Pchart';

const DATA = [
  { x: '회의실', y: 80 },
  { x: '차량', y: 65 },
  { x: '비품', y: 65 },
];

const PChart = () => {
  return (
    <Container>
      <PieContainer>
        <TitleContainer>자주 사용하는 자원</TitleContainer>
        <InnerContainer>
          <VictoryPie
            data={DATA}
            width={210}
            height={210}
            startAngle={130}
            endAngle={600}
            innerRadius={100}
            colorScale={['#095BF4', '#9EA9B3', '#033F7B']}
            style={{
              data: {
                fillOpacity: 0.8,
                stroke: 'black',
                strokeWidth: 0,
              },
              labels: {
                fontSize: 11,
                fill: 'black',
              },
            }}
          />
        </InnerContainer>
        <LegendContainer>
          <VictoryLegend
            x={125}
            y={50}
            height={250}
            width={250}
            orientation="vertical"
            gutter={40}
            rowGutter={{ top: 0, bottom: 10 }}
            style={{ border: { stroke: 'black' } }}
            colorScale={['#095BF4', '#9EA9B3', '#033F7B']}
            data={[{ name: '회의실' }, { name: '차량' }, { name: '비품' }]}
          />
        </LegendContainer>
      </PieContainer>
    </Container>
  );
};

export default PChart;
