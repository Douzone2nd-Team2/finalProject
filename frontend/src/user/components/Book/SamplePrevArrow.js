const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'none',
        opacity: 1,
        color: 'black',
      }}
      onClick={onClick}
    />
  );
};

export default SamplePrevArrow;
