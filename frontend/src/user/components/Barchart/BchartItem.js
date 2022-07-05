import { useState, useEffect } from 'react';
import axios from 'axios';

import { getCookie } from '../../utils/cookie';

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

const BchartItem = ({ catenum }) => {
  console.log(catenum);

  const [title, setTitle] = useState('');

  const changeTitle = () => {
    if (catenum == 1 || catenum == '') {
      setTitle('회의실');
    } else if (catenum == 2) {
      setTitle('차량');
    } else if (catenum == 3) {
      setTitle('비품');
    }
  };

  const getTest = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PORT}/main/stickchart?cateNo=${
          catenum === '' ? 1 : catenum
        }`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      )
      .then((response) => {
        changeTitle();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTest();
    changeTitle();

    // console.log('change catenum');
    // console.log(title);
  }, [catenum]);

  return (
    <BarContainer>
      <TitleContainer>{title} 사용시간</TitleContainer>
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
