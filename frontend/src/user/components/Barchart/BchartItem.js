import { useState, useEffect } from 'react';
import axios from 'axios';

import { getCookie } from '../../utils/cookie';

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

import { BarContainer, TitleContainer } from '../../styles/Bchart';

const BchartItem = ({ catenum }) => {
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [days, setDays] = useState();

  const changeTitle = () => {
    if (Number(catenum) === 1 || !catenum) {
      setTitle('회의실');
    } else if (Number(catenum) === 2) {
      setTitle('차량');
    } else if (Number(catenum) === 3) {
      setTitle('노트북');
    }
  };

  const getTest = () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_PORT}/main/stickchart?cateNo=${catenum}`,
        {
          headers: {
            Authorization: getCookie('accessToken'),
          },
        },
      )
      .then((res) => {
        changeTitle();
        setData([res.data.data]);
        setDays(res.data.data.days);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (data.length > 0) {
      const result = [];
      const totalCount = data[0].totalCnt;
      const days = data[0].days;
      const counts = data[0].hourConference.map((v) => v.cnt);
      const temp2 = totalCount * days * 4; //분모
      const spliceCounts = [];
      for (let i = 0; i < counts.length; i += 4) {
        spliceCounts.push(
          counts[i] + counts[i + 1] + counts[i + 2] + counts[i + 3],
        );
      }

      for (let i = 1; i < 13; i++) {
        const tempResult = {
          quarter: i,
          earnings: spliceCounts[i - 1] / temp2,
        };
        result.push(tempResult);
      }

      setInfo(result);
    }
  }, [data, days]);

  useEffect(() => {
    getTest();
  }, [catenum]);

  return (
    <BarContainer>
      <TitleContainer>
        <span className="useHour">{title} 사용시간</span>
        <span className="days">{days}일</span>
      </TitleContainer>
      <VictoryChart
        width={1200}
        height={800}
        padding={{ left: 100 }}
        domainPadding={{ x: 50, y: 30 }}
        margin={200}
        theme={VictoryTheme.material}
        style={{
          axis: { stroke: 'white' },
          grid: { stroke: '#94A2AD' },
          tickLabels: { fontSize: 20, padding: 10 },
        }}
        animate={{ duration: 1000, easing: 'bounce' }}
      >
        <VictoryAxis
          tickValues={[
            '00시',
            '02시',
            '04시',
            '06시',
            '08시',
            '10시',
            '12시',
            '14시',
            '16시',
            '18시',
            '20시',
            '22시',
          ]}
          tickFormat={(t) => `${t}`}
          style={{
            tickLabels: { fontSize: 25 },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
          tickFormat={(x) => `${100 * x}%`}
          style={{
            tickLabels: { fontSize: 25 },
          }}
        />
        <VictoryBar
          data={info}
          x="quarter"
          y="earnings"
          barWidth={30}
          style={{
            data: { fill: '#FF6A00' },
          }}
        />
      </VictoryChart>
    </BarContainer>
  );
};

export default BchartItem;
