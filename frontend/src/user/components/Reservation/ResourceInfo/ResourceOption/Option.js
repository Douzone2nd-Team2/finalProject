import { React, useState, useEffect } from 'react';

import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import NavigationIcon from '@material-ui/icons/Navigation';

import {
  OptionComponent,
  IconInfo,
  Icon,
  OptionInfo,
  OptionTitle,
  OptionDetail,
} from './style.js';

const Option = (props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(props.value);
  }, []);

  return (
    <OptionComponent>
      <IconInfo>
        {value &&
          (value === '빔프로젝터' ? (
            <VoiceChatIcon></VoiceChatIcon>
          ) : value === '네비게이션' ? (
            <NavigationIcon></NavigationIcon>
          ) : (
            <Icon></Icon>
          ))}
      </IconInfo>
      <OptionInfo>
        <OptionTitle>{value}</OptionTitle>
        <OptionDetail></OptionDetail>
      </OptionInfo>
    </OptionComponent>
  );
};

export default Option;
