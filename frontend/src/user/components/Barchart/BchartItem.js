import { useState, useEffect } from 'react';
import axios from 'axios';

import { getCookie } from '../../utils/cookie';

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

import { BarContainer, TitleContainer } from '../../styles/Bchart';

const DATA = [
  { quarter: 1, earnings: 5 },
  { quarter: 2, earnings: 7 },
  { quarter: 3, earnings: 8 },
  { quarter: 4, earnings: 11 },
  { quarter: 5, earnings: 13 },
  { quarter: 6, earnings: 15 },
  { quarter: 7, earnings: 13 },
  { quarter: 8, earnings: 14 },
  { quarter: 9, earnings: 19 },
  { quarter: 10, earnings: 20 },
  { quarter: 11, earnings: 13 },
  { quarter: 12, earnings: 10 },
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
        domainPadding={30}
        theme={VictoryTheme.material}
        style={{
          background: { fill: 'lightGray' },
        }}
      >
        <VictoryAxis
          tickValues={[
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
          tickFormat={(t) => `${t}`}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[4, 8, 12, 16, 20]}
          tickFormat={(x) => `${x}`}
        />
        {/* <VictoryAxis /> */}
        <VictoryBar
          data={DATA}
          x="quarter"
          y="earnings"
          barWidth={12}
          style={{
            data: { fill: '#328895' },
          }}
        />
      </VictoryChart>
    </BarContainer>
  );
};

export default BchartItem;
