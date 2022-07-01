import { useState, useEffect } from 'react';
import axios from 'axios';

import { getCookie } from '../utils/cookie';

// import { getCookie } from '../../utils/cookie';
import { VictoryPie, VictoryLegend } from 'victory';

import {
  Container,
  TitleContainer,
  PieContainer,
  InnerContainer,
  LegendContainer,
} from '../styles/Pchart';

const PChart = () => {
  const [pdata, setPdata] = useState([]);

  const DATA = [
    //   { x: '회의실', y: pdata.frequencyUsageList1?.toFixed(2) * 100 },
    //   { x: '차량', y: pdata.frequencyUsageList2?.toFixed(2) * 100 },
    //   { x: '비품', y: pdata.frequencyUsageList3?.toFixed(2) * 100 },
    { x: '회의실', y: 3 },
    { x: '차량', y: 3 },
    { x: '비품', y: 3 },
  ];

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_PORT}/main/piechart`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      );
      // console.log(res.data.data.frequencyUsageList1.toFixed(2));
      // console.log(res.data.data.frequencyUsageList2.toFixed(2));

      setPdata(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <PieContainer>
        <TitleContainer>오늘의 자원 사용률</TitleContainer>
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
