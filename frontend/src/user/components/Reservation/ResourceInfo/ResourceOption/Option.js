import { React, useState, useEffect } from 'react';

import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import NavigationIcon from '@material-ui/icons/Navigation';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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
          ) : value === '경유' || value === '휘발유' ? (
            <LocalGasStationIcon></LocalGasStationIcon>
          ) : (
            <CheckBoxIcon></CheckBoxIcon>
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
