import { useState, useEffect } from 'react';
import axios from 'axios';

import { getCookie } from '../../utils/cookie';

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

import { BarContainer, TitleContainer } from '../../styles/Bchart';

const BchartItem = ({ catenum }) => {
  const [title, setTitle] = useState('');
  const [totalcnt, setTotalcnt] = useState('');
  const [useDays, setUseDays] = useState('');
  const [hour, setHour] = useState([]);

  const DATA = [
    {
      quarter: 1,
      earnings:
        (hour[0]?.cnt + hour[1]?.cnt + hour[2]?.cnt + hour[3]?.cnt) /
        (useDays * totalcnt * 4),
    },
    {
      quarter: 2,
      earnings:
        (hour[4]?.cnt + hour[5]?.cnt + hour[6]?.cnt + hour[7]?.cnt) /
        (useDays * totalcnt * 4),
    },
    {
      quarter: 3,
      earnings:
        (hour[8]?.cnt + hour[9]?.cnt + hour[10]?.cnt + hour[11]?.cnt) /
        (useDays * totalcnt * 4),
    },
    {
      quarter: 4,
      earnings:
        (hour[12]?.cnt + hour[13]?.cnt + hour[14]?.cnt + hour[15]?.cnt) /
        (useDays * totalcnt * 4),
    },
    {
      quarter: 5,
      earnings:
        (hour[16]?.cnt + hour[17]?.cnt + hour[18]?.cnt + hour[19]?.cnt) /
        (useDays * totalcnt * 4),
    },
    {
      quarter: 6,
      earnings:
        (hour[20]?.cnt + hour[21]?.cnt + hour[22]?.cnt + hour[23]?.cnt) /
        (useDays * totalcnt * 4),
    },
    {
      quarter: 7,
      earnings:
        (hour[24]?.cnt + hour[25]?.cnt + hour[26]?.cnt + hour[27]?.cnt) /
        (useDays * totalcnt * 4),
    },
    {
      quarter: 8,
      earnings:
        (hour[28]?.cnt + hour[29]?.cnt + hour[30]?.cnt + hour[31]?.cnt) /
        (useDays * totalcnt * 4),
    },
    {
      quarter: 9,
      earnings:
        (hour[32]?.cnt + hour[33]?.cnt + hour[34]?.cnt + hour[35]?.cnt) /
        (useDays * totalcnt * 4),
    },
    {
      quarter: 10,
      earnings:
        (hour[36]?.cnt + hour[37]?.cnt + hour[38]?.cnt + hour[39]?.cnt) /
        (useDays * totalcnt * 4),
    },
    {
      quarter: 11,
      earnings:
        (hour[40]?.cnt + hour[41]?.cnt + hour[42]?.cnt + hour[43]?.cnt) /
        (useDays * totalcnt * 4),
    },
    {
      quarter: 12,
      earnings:
        (hour[44]?.cnt + hour[45]?.cnt + hour[46]?.cnt + hour[47]?.cnt) /
        (useDays * totalcnt * 4),
    },
  ];

  const changeTitle = () => {
    if (catenum == 1 || catenum == '') {
      setTitle('회의실');
    } else if (catenum == 2) {
      setTitle('차량');
    } else if (catenum == 3) {
      setTitle('노트북');
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
      .then((res) => {
        changeTitle();
        setTotalcnt(res.data.data.totalCnt);
        setUseDays(res.data.data.days);
        setHour(res.data.data.hourConference);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTest();
    changeTitle();
    console.log('총 자원 수 : ', totalcnt);
    console.log('총 사용 일 : ', useDays);
    console.log(hour);
  }, [totalcnt, catenum, useDays]);

  // DATA.map((item) => console.log(item.earnings));

  return (
    <BarContainer>
      <TitleContainer>{title} 사용시간</TitleContainer>
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
          data={DATA}
          x="quarter"
          y="earnings"
          barWidth={30}
          style={{
            data: { fill: 'darkblue' },
          }}
        />
      </VictoryChart>
    </BarContainer>
  );
};

export default BchartItem;
