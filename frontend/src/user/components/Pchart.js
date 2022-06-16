import { VictoryPie } from 'victory';

const PChart = () => {
  const data = [
    { x: '회의실', y: 80 },
    { x: '차량', y: 65 },
    { x: '비품(USB, 노트북)', y: 60 },
  ];

  return (
    <>
      <h1>자주 사용하는 자원</h1>
      <VictoryPie
        data={data}
        startAngle={130}
        endAngle={600}
        colorScale={['red', 'yellow', 'green']}
      />
    </>
  );
};

export default PChart;
