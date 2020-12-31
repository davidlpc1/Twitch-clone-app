import React from 'react';
import { View } from 'react-native';

import { 
  List, 
  ChannelContainer,
  LeftSide,
  Avatar, 
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle
} from './styles';

interface ChannelProps {
  username:string;
  newVideos:number;
}

const ChannelList: React.FC = () => {
  const ChannelItem: React.FC<ChannelProps> = ({ username,newVideos }) => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>{username}</Username>
          <Info>{newVideos} new(s) videos </Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  )

  return (
    <List>
      <ChannelItem username="rocketseat_oficial" newVideos={51} />
      <ChannelItem username="davidlpc1" newVideos={21} />
      <ChannelItem username="alura" newVideos={41} />
      <ChannelItem username="guilerme_rodz" newVideos={11} />
      <ChannelItem username="davidlpc123" newVideos={71} />
      <ChannelItem username="caelum" newVideos={15} />
      <ChannelItem username="filipe teló" newVideos={13} />
      <ChannelItem username='' newVideos={0} />
    </List>
  );
};

export default ChannelList;
