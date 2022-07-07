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
  const [options, setOptions] = useState([]);

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
