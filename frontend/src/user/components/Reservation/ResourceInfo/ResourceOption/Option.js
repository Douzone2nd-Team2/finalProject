import {
  OptionComponent,
  IconInfo,
  Icon,
  OptionInfo,
  OptionTitle,
  OptionDetail,
} from './style.js';

const Option = () => {
  return (
    <OptionComponent>
      <IconInfo>
        <Icon></Icon>
      </IconInfo>
      <OptionInfo>
        <OptionTitle>이-름</OptionTitle>
        <OptionDetail>내-용</OptionDetail>
      </OptionInfo>
    </OptionComponent>
  );
};

export default Option;
