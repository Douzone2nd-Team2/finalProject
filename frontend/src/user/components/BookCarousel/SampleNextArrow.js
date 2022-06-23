const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'none',
        opacity: 1,
      }}
      onClick={onClick}
    />
  );
};
export default SampleNextArrow;
