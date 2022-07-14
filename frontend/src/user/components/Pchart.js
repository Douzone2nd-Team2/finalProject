import { useState, useEffect } from 'react';
import axios from 'axios';

import { getCookie } from '../utils/cookie';

import { VictoryPie, VictoryLegend } from 'victory';

import {
  TitleContainer,
  PieContainer,
  InnerContainer,
  LegendContainer,
} from '../styles/Pchart';

const PChart = () => {
  const [data, setData] = useState({});
  const [info, setInfo] = useState([]);

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
      setData(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const bookData = parseFloat(data.frequencyUsageList1);
    const carData = parseFloat(data.frequencyUsageList2);
    const notebookData = parseFloat(data.frequencyUsageList3);
    const DATA = [
      {
        x: bookData === 0 ? null : '회의실',
        y: (bookData / (bookData + carData + notebookData)).toFixed(2) * 10,
      },
      {
        x: carData === 0 ? null : '차량',
        y: (carData / (bookData + carData + notebookData)).toFixed(2) * 10,
      },
      {
        x: notebookData === 0 ? null : '노트북',
        y: (notebookData / (bookData + carData + notebookData)).toFixed(2) * 10,
      },
    ];
    setInfo(DATA);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PieContainer>
      <TitleContainer>오늘의 자원 사용률</TitleContainer>
      <InnerContainer>
        <VictoryPie
          data={info}
          colorScale={['#095BF4', '#9EA9B3', '#033F7B']}
          style={{
            data: {
              fillOpacity: 1,
              stroke: 'black',
              strokeWidth: 0,
            },
            labels: {
              fontSize: 15,
              fill: 'black',
              fontWeight: 'bold',
            },
          }}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: 'data',
                      mutation: ({ style }) => {
                        return style.fill === '#c43a31'
                          ? null
                          : { style: { fill: '#c43a31' } };
                      },
                    },
                    {
                      target: 'labels',
                      mutation: ({ text }) => {
                        return text === 'clicked' ? null : { text: 'clicked' };
                      },
                    },
                  ];
                },
              },
            },
          ]}
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
          data={[{ name: '회의실' }, { name: '차량' }, { name: '노트북' }]}
        />
      </LegendContainer>
    </PieContainer>
  );
};

export default PChart;
