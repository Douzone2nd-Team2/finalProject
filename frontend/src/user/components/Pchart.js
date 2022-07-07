import { useState, useEffect } from 'react';
import axios from 'axios';

import { isEmpty } from '../utils/jsFunction';
import { getCookie } from '../utils/cookie';

import { VictoryPie, VictoryLegend } from 'victory';

import {
  Container,
  TitleContainer,
  PieContainer,
  InnerContainer,
  LegendContainer,
} from '../styles/Pchart';

const PChart = () => {
  const [bookdata, setBookdata] = useState(null);
  const [cardata, setCardata] = useState(null);
  const [notebookdata, setNotebookdata] = useState(null);

  const DATA = [
    {
      x: '회의실',
      y:
        isEmpty(bookdata) === false &&
        isEmpty(cardata) === false &&
        isEmpty(notebookdata) === false &&
        (bookdata / (bookdata + cardata + notebookdata)).toFixed(2) * 10,
    },
    {
      x: '차량',
      y:
        isEmpty(bookdata) === false &&
        isEmpty(cardata) === false &&
        isEmpty(notebookdata) === false &&
        (cardata / (bookdata + cardata + notebookdata)).toFixed(2) * 10,
    },
    {
      x: '노트북',
      y:
        isEmpty(bookdata) === false &&
        isEmpty(cardata) === false &&
        isEmpty(notebookdata) === false &&
        (notebookdata / (bookdata + cardata + notebookdata)).toFixed(2) * 10,
    },
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
      setBookdata(parseFloat(res.data.data.frequencyUsageList1.toFixed(4)));
      setCardata(parseFloat(res.data.data.frequencyUsageList2.toFixed(4)));
      setNotebookdata(parseFloat(res.data.data.frequencyUsageList3.toFixed(4)));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [bookdata, cardata, notebookdata]);

  return (
    <Container>
      <PieContainer>
        <TitleContainer>오늘의 자원 사용률</TitleContainer>
        <InnerContainer>
          <VictoryPie
            data={DATA}
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
                          return text === 'clicked'
                            ? null
                            : { text: 'clicked' };
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
    </Container>
  );
};

export default PChart;
