import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

import { BarContainer, TitleContainer } from '../../styles/Bchart';

const DATA = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
  { quarter: 5, earnings: 13000 },
  { quarter: 6, earnings: 16500 },
  { quarter: 7, earnings: 14250 },
  { quarter: 8, earnings: 19000 },
  { quarter: 9, earnings: 13000 },
  { quarter: 10, earnings: 16500 },
  { quarter: 11, earnings: 14250 },
  { quarter: 12, earnings: 19000 },
];

const BchartItem = ({ selected }) => {
  return (
    <BarContainer>
      <TitleContainer>{selected} 사용시간</TitleContainer>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
        colorScale={'warm'}
        style={{
          background: { fill: 'white' },
        }}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          tickFormat={[
            '08',
            '10',
            '12',
            '14',
            '16',
            '18',
            '20',
            '22',
            '00',
            '02',
            '04',
            '06',
          ]}
        />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x / 200}%`} />
        <VictoryBar
          data={DATA}
          x="quarter"
          y="earnings"
          barWidth={10}
          style={{
            data: { fill: '#328895' },
          }}
        />
      </VictoryChart>
    </BarContainer>
  );
};

export default BchartItem;
